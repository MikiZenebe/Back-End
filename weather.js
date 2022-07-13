const { response } = require('express')
const express = require('express')
const https = require('https')
const app = express()


app.get("/", (req, res) => {
    const url = ("https://api.openweathermap.org/data/2.5/weather?q=London&appid=ee2c4429489276819bd3ae088a641ccd")

    https.get(url, (response) => {
        console.log(response.statusCode)

        response.on("data", (data) => {
            const weatherData = JSON.parse(data) //convert the data into text
            const city = weatherData.name
            const temp = weatherData.main.temp
            res.send("The temprature of " + city + "is " + temp)
        })
    })

})

app.listen(3001, () => {
    console.log("Server is fine...")
})