const ALLOWED_INPUTS = ['V75', 'V65', 'V64', 'V4']

const getData = async object => {
  const obj = await object
  const gameId = obj.upcoming[0] ? obj.upcoming[0].id : obj.results[0].id

  const races = fetch('/getGameData/' + gameId)
    .then(response => response)
    .then(async data => {
      const gameData = await data.json()
      return gameData.races
    })

  return races
}

export const getGames = gameType =>
  fetch('/getGames/' + gameType)
    .then(response => response)
    .then(async data => await getData(data.json()))
