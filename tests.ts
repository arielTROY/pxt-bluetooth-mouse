bluetooth.onBluetoothConnected(function() {
    basic.showString("C")
})

bluetooth.onBluetoothDisconnected(function() {
    basic.showString("D")

})
bluetooth.startMouseService()
basic.showString("S")


input.onButtonPressed(Button.A, function() {
    bluetooth.setMouseButton(MouseButton.MOUSE_BUTTON_LEFT, ButtonState.BUTTON_DOWN)
    control.waitMicros(4)
    bluetooth.setMouseButton(MouseButton.MOUSE_BUTTON_LEFT, ButtonState.BUTTON_UP)
})

basic.forever(function() {
    bluetooth.setMouseSpeed(input.acceleration(Dimension.X) / 8, input.acceleration(Dimension.Y) / 8, 0)

})
