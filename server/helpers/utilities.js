/**
* Helpers/utilties.js
* -------------------
* Instagram paginate by default the results, and provides with a 'next page' link to get more data
* The only way to get all the data at once, is to serialise the requests.
* There are several libraries to do so. But I prefer a simple recursive approach for this prototype
*
* TODO:
* improve errors/fails handling
*/
var request     = require('request');
var _           = require('underscore');

var pagination = function( data, nextUrl, followList, res ) {
  
  // case 0
  followList.push( data );

  // case N
  if ( !nextUrl ) {
    // flatten the pages
    var flat = _.flatten( followList );  //var flat = [].concat.apply( [], followList );
    // sortBy username
    res.send( _.sortBy( flat, function( user ){ return user.username; } ) );
    return;
  }
  request.get({ url: nextUrl, json: true }, function( error, response, body ) {
    if ( !error && response.statusCode === 200 ) {
      pagination( body.data, body.pagination.next_url, followList, res );
    }
  });
};

// expose the following function:
module.exports.fetchNextPages = function( body, type, res ) {
  var firstPage     = body.data;
  var nextUrl       = body.pagination.next_url;

  return pagination( firstPage, nextUrl, [], res );
};