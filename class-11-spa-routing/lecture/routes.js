page('/', index)
page('/about', about)
page('/contact', contactController.showAll)
page('/contact/:name', contactController.getInfo)

page('*', epicfail)

page()
