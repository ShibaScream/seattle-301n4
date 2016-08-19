var contact = {
  dan: {
    name: 'Dan',
    email: 'dpschwartz@gmail.com'
  }
};

contact.loadContact = function(name) {
  var email = this[name].email
  contactView.showContact(email)
}
