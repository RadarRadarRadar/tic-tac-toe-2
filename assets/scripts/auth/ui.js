'use strict'

const store = require('./../store')

const signUpSuccess = function (response) {
  $('.unauth-system-message').text('Signed Up Successful')
  $('form').trigger('reset')
}
const signUpFailure = function (onError) {
  $('.unauth-system-message').text('Sign Up Failed')
}

const signInSuccess = function (response) {
  $('.auth-system-message').text('Sign In Successful!')
  store.user = response.user
  $('.unauthenticated').hide()
  $('.change-password-form').hide()
  $('.authenticated').show()
  $('.game-board-display').hide()
  $('form').trigger('reset')
}
const signInFailure = function (onError) {
  $('unauth-system-message').text('Sign In Failed')
}

const changePasswordSuccess = function () {
  $('.auth-system-message').text('Change Password Successful!')
  $('.change-password-form').hide()
  $('form').trigger('reset')
}

const changePasswordFailure = function (onError) {
  $('.auth-system-message').text('Change Password Failed')
}

const signOutSuccess = function () {
  $('.authenticated').hide()
  $('.unauthenticated').show()
  $('.unauth-system-message').text('Sign Out Successful!')
  store.user = null
  $('form').trigger('reset')
}
const signOutFailure = function (onError) {
  $('.auth-system-message').text('Sign Out Failed')
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
