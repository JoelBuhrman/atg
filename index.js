const express = require('express')
const path = require('path')
const axios = require('axios')

const app = express()

app.use(express.static(path.join(__dirname, 'client/build')))

app.get('/getGames/:gameType', async (req, res) => {
  const { gameType } = req.params
  try {
    const { data } = await axios.get(
      'https://www.atg.se/services/racinginfo/v1/api/products/' + gameType
    )
    res.send(data)
  } catch (error) {
    console.error(error)
  }
})

app.get('/getGameData/:gameId', async (req, res) => {
  const { gameId } = req.params
  try {
    const { data } = await axios.get(
      'https://www.atg.se/services/racinginfo/v1/api/games/' + gameId
    )
    res.send(data)
  } catch (error) {
    console.error(error)
  }
})

const port = process.env.PORT || 5000
app.listen(port)
