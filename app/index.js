var nano = require('nanochoo')
var x = require('hyperaxe')
var app = nano()

app.view(view)
app.use(store)
app.mount('#app')

function view (state, emit) {
  var gamepads = Object.values(state.controllers)
  var title = x('p.title')

  return x('#app')(
    gamepads.length < 1
      ? 'Press a button on your controller to start'
      : gamepads.map((gamepad, idx) =>
        x('.gamepad')(
          title(`${idx + 1}: ${gamepad.id}`),
          title('Buttons'),
          x('.buttons')(
            buttons(gamepad.buttons)
          ),
          title('Axes'),
          x('.axes')(
            axes(gamepad.axes)
          )
        )
      )
  )
}

function buttons (arr) {
  return arr.map((button, idx) => {
    var pressed = button === 1.0
    var val = button
    if (typeof button === 'object') {
      pressed = button.pressed
      val = button.value
    }
    var pct = `${Math.round(val * 100)}%`
    return x(`.button${pressed ? '.pressed' : ''}`)(
      { style: `background-size: ${pct} ${pct}` },
      idx
    )
  })
}
