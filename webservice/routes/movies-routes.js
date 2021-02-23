const express = require('express')
const axios = require('axios')
const { response } = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
  axios.get(`https://api.themoviedb.org/3/search/keyword?api_key=${req.query.apikey}&query=${req.query.search}`)
  .then(response => {
    res.json(response.data)
  })
})

module.exports = router