'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('./../store')
const logic = require('./checkWin')
const getFormFields = require('./../../../lib/get-form-fields')

let currentPlayerMark

let playerOneMark = 'X'
let playerTwoMark = 'O'

const onStartNewGame = function (event) {
  currentPlayerMark = playerOneMark
  $('.game-message').text(`Game Created. It is ${currentPlayerMark}'s Turn.`)
  $('.game-board-display').show()
  $('.game-space').off()
  $('.game-space').on()
  $('.game-space').on("click", onMarkerPlacement)
  $('.game-space').html('')
  api.startNewGame()
    .then(function (response) {
      return response
    })
    .then(ui.createNewGameSuccess)
    .catch(ui.createNewGameFail)
}

const turnOver = function () {
  if (currentPlayerMark === playerOneMark) {
    currentPlayerMark = playerTwoMark
  } else {
    currentPlayerMark = playerOneMark
  };
  return currentPlayerMark
}

const onMarkerPlacement = function (event) {
  const cellIndex = $(event.target).data('cell-index')
  const gameArray = store.game.cells
  const gameArrayIndex = gameArray[cellIndex]

  if (gameArrayIndex !== playerOneMark && gameArrayIndex !== playerTwoMark) {
    gameArray[cellIndex] = currentPlayerMark
    const currentGameState = logic.checkWin(gameArray)

    $(event.target).html(currentPlayerMark)

    api.markerPlacement(cellIndex, currentPlayerMark, currentGameState)
      .then(function (response) {
        return response
      })
      .then(ui.markerPlacementSuccess)
      .catch(ui.markerPlacementFail)

    turnOver()
    if (currentGameState === false) {
        $('.game-message').text(`${currentPlayerMark}'s turn to place`)
    }
    if (currentGameState === true) {
      $('.game-space').off()
    }
  } else {
    ui.markerPlacementFail()
  }
}

const onCheckGamesPlayed = function (event) {
  event.preventDefault()
  api.checkGamesPlayed()
    .then(ui.checkGamesPlayedSuccess)
    .catch(ui.checkGamesPlayedFail)
}

module.exports = {
  onStartNewGame,
  onMarkerPlacement,
  onCheckGamesPlayed
}
