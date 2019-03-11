const express = require('express')
const path = require('path')
const https = require('https')

const app = express()

app.use(express.static(path.join(__dirname, 'client/build')))

app.get('/getGames/:gameType', (req, res) => {
  const { gameType } = req.params
  https
    .get(
      'https://www.atg.se/services/racinginfo/v1/api/products/' + gameType,
      resp => {
        let data = ''
        resp.on('data', chunk => {
          data += chunk
        })
        resp.on('end', () => {
          res.send(JSON.parse(data))
        })
      }
    )
    .on('error', err => {
      console.log('Error: ' + err.message)
    })
})

app.get('/getGameData/:gameId', (req, res) => {
  const { gameId } = req.params
  https
    .get(
      'https://www.atg.se/services/racinginfo/v1/api/games/' + gameId,
      resp => {
        let data = ''
        resp.on('data', chunk => {
          data += chunk
        })
        resp.on('end', () => {
          res.send(JSON.parse(data))
        })
      }
    )
    .on('error', err => {
      console.log('Error: ' + err.message)
    })
})

const port = process.env.PORT || 5000
app.listen(port)
