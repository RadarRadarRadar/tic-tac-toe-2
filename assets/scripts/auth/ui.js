'use strict'
// Required files
const store = require('./../store')

const signUpSuccess = function (response) {
  $('#message').text('Signed Up Successfully!')
  $('form').trigger('reset')
}
const signUpFailure = function (onError) {
  $('#message').text('Sign Up Failed')
}

const signInSuccess = function (response) {
  $('#message').text('Sign In Successfully!')
  store.user = response.user
  $('.header').hide()
  $('.unauthenticated').hide()
  $('.authenticated').show()
  $('.change-password-form').hide()
  $('.player-mark-form').hide()
  $('#game-board-display').hide()
  $('form').trigger('reset')
}
const signInFailure = function (onError) {
  $('#message').text('Sign In Failed')
}

const changePasswordSuccess = function () {
  $('#message').text('Change password success!')
  $('form').trigger('reset')
}
const changePasswordFailure = function (onError) {
  $('#message').text('Change Password Failed')
}

const signOutSuccess = function () {
  $('#message').text('Sign Out success!')
  $('.authenticated').hide()
  $(".header").show()
  $('.unauthenticated').show()
  store.user = null
  $('form').trigger('reset')
}
const signOutFailure = function (onError) {
  $('#message').text('Sign Out Failed')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutFailure,
  signOutSuccess
}
