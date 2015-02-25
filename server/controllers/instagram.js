/**
* controllers/instagram.js
* ------------------------
* All the request to Instagram
*/
'use strict';

var request = require('request');
var helpers = require('../helpers/utilities');

module.exports = function( app, auth ) {

  app.get('/api/feed', auth.isAuthenticated, function( req, res ) {
    var feedUrl = 'https://api.instagram.com/v1/users/self/feed';
    var params  = { 
      'access_token': req.user.accessToken, 
      'count': 30
    };

    request.get({ url: feedUrl, qs: params, json: true }, function( error, response, body ) {
      if ( !error && response.statusCode == 200 ) {
        console.log('data', body.data)
        res.send( body.data );
      }
    });
  });

  app.get('/api/media/:id', auth.isAuthenticated, function( req, res ) {
    var mediaUrl = 'https://api.instagram.com/v1/media/' + req.params.id;
    var params   = { access_token: req.user.accessToken };

    request.get({ url: mediaUrl, qs: params, json: true }, function(error, response, body) {
      if ( !error && response.statusCode === 200 ) {
        res.send( body.data );
      }
    });
  });

  app.get('/api/follows/:id', auth.isAuthenticated, function( req, res ) {
    var relUrl = 'https://api.instagram.com/v1/users/' + req.params.id + '/follows';
    var params = { access_token: req.user.accessToken };

    request.get({ url: relUrl, qs: params, json: true }, function( error, response, body ) {
      if ( !error && response.statusCode === 200 ) {
        helpers.fetchNextPages( body, 'follows', res );
      }
    });

  });

  app.get('/api/followed-by/:id', auth.isAuthenticated, function( req, res ) {
    var relUrl = 'https://api.instagram.com/v1/users/' + req.params.id + '/followed-by';
    var params = { access_token: req.user.accessToken };

    request.get({ url: relUrl, qs: params, json: true }, function( error, response, body ) {
      if ( !error && response.statusCode === 200 ) {
        helpers.fetchNextPages( body, 'followedBy', res );
      }
    });

  });

  app.post('/api/like', auth.isAuthenticated, function( req, res ) {
    var mediaId     = req.body.mediaId;
    var accessToken = { access_token: req.user.accessToken };
    var likeUrl     = 'https://api.instagram.com/v1/media/' + mediaId + '/likes';

    request.post({ url: likeUrl, form: accessToken, json: true }, function( error, response, body ) {
      if ( response.statusCode !== 200 ) {
        return res.status( response.statusCode ).send({
          code: response.statusCode,
          message: body.meta.error_message
        });
      }
      res.status( 200 ).end();
    });
  });

  app.post('/api/relationship', auth.isAuthenticated, function( req, res ) {
    var userId = req.body.userId;
    var relUrl = 'https://api.instagram.com/v1/users/' + userId + '/relationship';
    var params = { 
      'access_token': req.user.accessToken,
      'action': req.body.action
    };

    request.post({ url: relUrl, form: params, json: true }, function( error, response, body ) {
      console.log('responsde', response)

      if ( response.statusCode !== 200 ) {
        return res.status( response.statusCode ).send({
          code: response.statusCode,
          message: body.meta.error_message
        });
      }
      res.status( 200 ).end();
    });
  });

}
