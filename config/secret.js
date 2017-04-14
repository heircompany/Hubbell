module.exports = {
  database: 'mongodb://admin:admin@ds161400.mlab.com:61400/heroku_9k7pf22q',
  port: process.env.PORT || 3000,
  secretKey: "puddles",

  facebook: {
      clientID: process.env.FACEBOOK_ID || '1412743178757490',
      clientSecret: process.env.FACEBOOK_SECRET || '39c356466cd3e58ce979f47eac7ef45d',
      profileFields: ['emails', 'displayName'],
      callbackURL: 'http://pure-refuge-84967.herokuapp.com/facebook/callback'
  }
}
