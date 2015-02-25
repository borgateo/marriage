/**
* config/settings.js
* 
*/
module.exports = {
  db: process.env.db || 'localhost',
  clientSecret: process.env.clientSecret || '04fe514dcac64841abeeba638b3e5b22',
  tokenSecret: process.env.tokenSecret || 'this is a very long string for the tokenSecret'
};
