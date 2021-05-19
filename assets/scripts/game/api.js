'use strict'

const config = require('./../config')
const store = require('./../store')

const startNewGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    data: '{}',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const markerPlacement = function (cellIndex, currentPlayerMark, currentGameState) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: cellIndex,
          value: currentPlayerMark
        },
        over: currentGameState
      }
    }
  })
}

const checkGamesPlayed = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  startNewGame,
  markerPlacement,
  checkGamesPlayed
}
