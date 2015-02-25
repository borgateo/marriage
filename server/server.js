'use strict';

var bodyParser  = require('body-parser');
var cors        = require('cors');
var express     = require('express');

var path        = require('path');
var request     = require('request');
var compress    = require('compression');

var config      = require('./config/settings');
var User        = require('./models/users').user;

var auth        = require('./middlewares/auth');

var app         = express();
app.set( 'port', process.env.PORT || 3000 );
app.use( compress() );
app.use( cors() );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: false }) );
app.use( express.static( path.join(__dirname, 'public'), { maxAge: 2628000000 } ) );

require('./controllers/instagram')( app, auth );
require('./controllers/signin')( app, auth, config, User );


app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});