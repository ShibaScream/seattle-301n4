var contactView = {};

contactView.init = function() {
  var contacts = document.getElementById('contacts')
  contacts.style.display = 'block'
}

contactView.showContact = function(email) {
  var h1El = document.querySelector('h1')
  h1El.textContent = email
}
