'use strict'

const authEvent = require('./auth/events')
const gameEvent = require('./game/events')

$(() => {
  $('.authenticated').hide()
  $('.sign-up').on('submit', authEvent.onSignUp)
  $('.sign-in').on('submit', authEvent.onSignIn)
  $('.change-password').on('submit', authEvent.onChangePassword)
  $('.sign-out').on('click', authEvent.onSignOut)
  $('.change-password').on('click', function() {
    $('.change-password-form').show()
  })
  $('.cancel').on('click', function() {
    $('.change-password-form').hide()
  })
  $('.start-new-game').on('click', gameEvent.onStartNewGame)
  $('.games-played').on('click', gameEvent.onCheckGamesPlayed)
})
