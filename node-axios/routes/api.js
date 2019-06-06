
const express = require('express')
const https = require('https')
const axios = require('axios');
const R = require('ramda');

var env = require('../config/env')

var router = express.Router()
router.all('*', backend)
module.exports = router

function backend(req, res) {

    const contentTypeSelector = R.compose(
        R.reduce(R.or, ''),
        R.props(['content-type', 'Content-Type']),
        R.prop('headers')
    )
    const authorizationSelector = R.compose(
        R.reduce(R.or, ''),
        R.props(['authorization', 'Authorization']),
        R.prop('headers')
    )

    const url = env[process.env.NODE_ENV].backendURL + req.path,
        contentType = contentTypeSelector(req) || '',
        authorization = authorizationSelector(req),
        headers = {
            'Accept-Language': 'zh-TW,zh;q=0.8,en-US;q=0.6,en;q=0.4',
            'Accept': 'application/json',
            'X-Forwarded-For': req.headers['x-forwarded-for'] || req.ip,
            'Remote-Addr': req.headers['x-real-ip'] || req.ip,
        },
        payload = {
            method: req.method,
        }

    if (contentType) {
        headers['Content-Type'] = contentType
    }

    if (authorization && authorization.match(/^[Bb]earer .*/)) {
        headers['Authorization'] = authorization
    }

    if ( req.method === 'POST' && R.startsWith('application/x-www-form-urlencoded', contentType)) {
        data = postFormData(req.body)
    } else if (req.method === 'GET') {
        data = null
        url += getQueryParams(req.query)
    }

    payload.url = url
    payload.headers = headers
    payload.data = req.body || ''

    const instance = axios.create({
        httpsAgent: new https.Agent({
            rejectUnauthorized: false,
        })
    });

    instance(payload)
        .then(function (response) {
            // Success
            console.log(response.status);
            console.log(response.data);
            res.send(response.data)
        })
        .catch(function (error) {
            if (error.response) {
                res.status(error.response.status).send(error.message)
            }
            console.log(error);
        })
}

function postFormData(params) {
    Object.keys(params).forEach(k => {
      if (!params[k]) delete params[k]
    })
  
    return Object.keys(params)
      .map(k => k + '=' + params[k])
      .join('&')
  }
  
function getQueryParams(params) {
    Object.keys(params).forEach(k => {
        if (!params[k]) delete params[k]
    })
    const keys = Object.keys(params)

    if (!keys || keys.length <= 0) return ''

    return (
        '?' +
        keys
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
            .join('&')
    )
}



