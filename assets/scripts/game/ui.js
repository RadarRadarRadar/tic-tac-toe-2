'use strict'

const store = require('../store')

const createNewGameSuccess = function (response) {
  store.game = response.game
}

const createNewGameFail = function () {
  $('.game-message').text('Game Not Created Big Ooph')
}

const markerPlacementSuccess = function (response) {
  store.game = response.game
}

const markerPlacementFail = function () {
  $('#player-message').text('Not a Legal Move Try Again')
}

const checkGamesPlayedSuccess = function (response) {
  store.games = response.games
  const gamesPlayedArray = store.games
  const gamesPlayed = gamesPlayedArray.length
  $('.game-message').text(`${gamesPlayed} Games Played`)
}

const checkGamesPlayedFail = function () {
  $('.game-message').text('It Broke')
}

module.exports = {
  createNewGameSuccess,
  createNewGameFail,
  markerPlacementSuccess,
  markerPlacementFail,
  checkGamesPlayedSuccess,
  checkGamesPlayedFail
}
