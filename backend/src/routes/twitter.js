'use strict'
const passport = require('../config/passport')
const twitter = require('../config/twitter')
const home_url = 'http://localhost:3000'

module.exports = (router) => {
  router.get('/tw/login', passport.authenticate('twitter'))
  
  router.get('/tw/failed', (req, res) => {
    res.status(200).send({ status: false, message: 'error en la autenticación' })
  })
  
  router.get('/tw/success', (req, res) => {
    let usr = {
      status: true,
      user: req.user,
      cookies: req.cookies
    }
    if(req.user) res.status(200).send(usr)
    else res.status(200).send({ status: false, message: 'error en la autenticación' })

  })

  router.get("/tw/logout", (req, res) => {
    req.logout()
    res.redirect(`${home_url}`)
  }); 

  router.get('/tw/redirect/', passport.authenticate('twitter', {
    successRedirect: `${home_url}/feed`,
    failureRedirect: '/'
  }))

  router.get('/tw/timeline', (req, res) => {
    let params = { count: req.query.count }
    twitter.get('statuses/home_timeline', params)
      .then(tweets => res.status(200).send({ status: true, timeline: tweets.data }))
      .catch(e => res.status(200).send({ status: false, message: e.message }))
  })

  router.post('/tw/tweet', (req, res) => {
    let data = req.body || {}
    twitter.post('statuses/update', { status: data.myTweet })
      .then(tweet => res.status(200).send({ status: true, data: tweet.data }))
      .catch(e => res.status(200).send({ status: false, message: e.message }))
  })
}