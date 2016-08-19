var contactController = {
  showAll: function() {
    contactView.init()
  },
  getInfo: function(ctx, next) {
    var name = ctx.params.name

    contact.loadContact(name)
  }
}
