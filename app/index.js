var nano = require('nanochoo')
var x = require('hyperaxe')
var app = nano()

app.view(view)
app.use(store)
app.mount('#app')
