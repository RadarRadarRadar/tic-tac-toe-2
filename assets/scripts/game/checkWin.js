'use strict'
const store = require('../store')

// const gameArray = store.game.cells
// const gameState = store.game.over
// const gameArray = ['', '', 'X', '', '', 'X', '', '', 'X']

const checkWin = function (gameArray) {
  const isPopulated = (currentValue) => currentValue !== ''
  let gameState = store.game.over // I know this is false
  // console.log(gameState)
  if (gameArray[0] !== '' && gameArray[0] === gameArray[1] && gameArray[0] === gameArray[2]) {
    // console.log(gameState)
    gameState = true
    $('.game-message').html('')
    $('.game-message').html('Winner!')
  } else if (gameArray[3] !== '' && gameArray[3] === gameArray[4] && gameArray[3] === gameArray[5]) {
    // console.log(gameState)
    gameState = true
    $('.game-message').html('')
    $('.game-message').html('Winner!')
  } else if (gameArray[6] !== '' && gameArray[6] === gameArray[7] && gameArray[6] === gameArray[8]) {
    // console.log(gameState)
    gameState = true
    $('.game-message').html('')
    $('.game-message').html('Winner!')
  } else if (gameArray[0] !== '' && gameArray[0] === gameArray[3] && gameArray[0] === gameArray[6]) {
    // console.log(gameState)
    gameState = true
    $('.game-message').html('')
    $('.game-message').html('Winner!')
  } else if (gameArray[1] !== '' && gameArray[1] === gameArray[4] && gameArray[1] === gameArray[7]) {
    // console.log(gameState)
    gameState = true
    $('.game-message').html('')
    $('.game-message').html('Winner!')
  } else if (gameArray[2] !== '' && gameArray[2] === gameArray[5] && gameArray[2] === gameArray[8]) {
    // console.log(gameState)
    gameState = true
    $('.game-message').html('')
    $('.game-message').html('Winner!')
  } else if (gameArray[0] !== '' && gameArray[0] === gameArray[4] && gameArray[0] === gameArray[8]) {
    // console.log(gameState)
    gameState = true
    $('.game-message').html('')
    $('.game-message').html('Winner!')
  } else if (gameArray[2] !== '' && gameArray[2] === gameArray[4] && gameArray[2] === gameArray[6]) {
    gameState = true
    $('.game-message').html('')
    $('.game-message').html('Winner!')
    // console.log(gameState)
  } else if (gameArray.every(isPopulated) === true) {
    gameState = true
    $('.game-message').html('')
    $('.game-message').html('It is a tie!')
    // $('#game-board-display').hide()
    // console.log('TIE!')
    // console.log(gameState)
  }
  return gameState
}

// const checkDraw = function (gameArray) {
//   const isPopulated = (currentValue) => currentValue !== ''
//   if (gameArray.every(isPopulated) === true) {
//     gameState = true
//   }
//   return gameState
// }

// const winCons = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6]
// ]
//
//
// function checkWin() {
//   winCons.forEach(function(element, index) {
//     if (gameArray[element[0]] === gameArray[element[1]] &&
//       gameArray[element[0]] === gameArray[element[2]]) {
//       console.log('winner')
//     } else {
//       console.log('loser')
//     }
//   });
// }


// if
// gameArray[0] === gameArray[0] &&
// gameArray[0] === gameArray[1] &&
// gameArray[0] === gameArray[2] &&
// else if
// gameArray[3] === gameArray[3] &&
// gameArray[3] === gameArray[4] &&
// gameArray[3] === gameArray[5] &&
// etc...

// else if
// gameArray is full triggerDraw()

// else
// keep playing

// gameState = store.game.over

// handleGameOver = function () {
 // gameState = 'true'
// }


// Check the string for the winCons
// If the value at each of points in the arrays of above are all equal
// then it is a win
// Pass it the whole string and check each value at that point (.forEach)
// If thing A is equal to thing A,
// and thing A is equal to thing B,
// and thing A is equal to thing C
// then it is a win for the current Player
// Trigger wincon events
// For each thing in my game array check if each coresponding position to
// the wincon array's array points are equal.
// If they any are trigger the winner function.
// If not test for a draw.
// If still not, log the turn and proceed to handle the turn.
module.exports = {
  checkWin
  // checkDraw
}
