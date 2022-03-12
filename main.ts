datalogger.setColumns(["temperature", "light"])
loops.everyInterval(10000, function () {
    datalogger.logData([datalogger.createCV("temperature", Sensor.tempC(AnalogPin.P1)), datalogger.createCV("light", Sensor.lightLevel(AnalogPin.P2))])
})
