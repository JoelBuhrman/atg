const ALLOWED_INPUTS = ['V75', 'V65', 'V64', 'V4']

export const getGames = gameType =>
  fetch('/getGames/' + gameType)
    .then(response => response)
    .then(async data => await data.json())

export const getGameData = gameId =>
  fetch('/getGameData/' + gameId)
    .then(response => response)
    .then(async data => await data.json())
