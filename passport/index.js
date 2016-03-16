var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var users = {
  jacob: {
    username: 'jacob',
    password: '1234',
    id: 1,
  },
  admin: {
    username: 'admin',
    password: '5678',
    id: 2,
  },
}

var localStrategy = new LocalStrategy({
      usernameField: 'username',
      passwordField: 'password',
    },
    function(username, password, done) {
      user = users[ username ];

      if ( user == null ) {
        return done( null, false, { message: 'Invalid user' } );
      };

      if ( user.password !== password ) {
        return done( null, false, { message: 'Invalid password' } );
      };

      done( null, user );
    }
  )

passport.use( 'local', localStrategy );

app.use( bodyParser.urlencoded( { extended: false } ) );
app.use( bodyParser.json() );
app.use( passport.initialize() );

app.post(
  '/login',
  passport.authenticate( 'local', { session: false } ),
  function( req, res ) {
    res.send( 'User ID ' + req.user.id );
  }
);

app.listen(3000, function() {
  console.log('Listening on 3000');
});