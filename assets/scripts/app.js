'use strict'

const authEvent = require('./auth/events')
const gameEvent = require('./game/events')

$(() => {
  $('.authenticated').hide()
  $('.sign-up').on('submit', authEvent.onSignUp)
  $('.sign-in').on('submit', authEvent.onSignIn)
  $('.change-password').on('submit', authEvent.onChangePassword)
  $('.sign-out').on('click', authEvent.onSignOut)
})
