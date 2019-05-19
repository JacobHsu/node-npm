const async = require('async');

// fun1, fun2 互相獨立可以平行執行
// fun3 要等 fun1, fun2 完成
// fun4 要等 fun1 完成

async.auto({
    // fun1 可以自己開始執行
    fun1: function(finish){
        console.log('fun1=', 'one');
        finish(null, '1', 'one');   // 會傳到 results
    },

    // fun2 可以自己開始執行
    fun2_env: (cb) => {
        const env = require('./config/env');
        console.log('fun2_env=', env);
        cb(null, env); // { dev: { port: 8080 } }
    },

    // fun3 要等 fun1, fun2 完成
    fun3: ['fun1', 'fun2_env', function(results, cb){
        console.log('fun3=',results['fun1']);   // ['1', 'one']
        console.log('fun3=',results.fun2_env.dev);   // { port: 8080 }
        cb(null, '3', results.fun2_env.dev.port);
    }],

    // fun4 要等 fun1 完成
    fun4: ['fun1', function(results, finish){
        finish(null, '4', 'four');
    }]

}, function(err, results){

    if(err) console.log(err);
    console.log('results=', results);

    // results = { 
    //     fun1: ['1', 'one'],
    //     fun2: ['2', 'two'],
    //     fun4: ['4', 'four'],
    //     fun3: ['3', 'three'] 
    // }

});