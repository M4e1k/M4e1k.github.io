const hours = new Date().getHours() // get the current hour


const isMorning = hours >= 4 && hours < 12 // is it morning?


const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

const showTime = (message, {hours, isMorning, isAfternoon, isEvening}) => {
    message.querySelector('#welcome').textContent = hours
    message.querySelector('#welcome').textContent = isMorning
    message.querySelector('#welcome').textContent = isAfternoon
    message.querySelector('#welcome').textContent = isEvening
}
document,addEventListener("DOMContentLoaded", function(){
    const secretMessage = "Hello To you and people"
    localStorage.setItem("It's a secret to everybody.", secretMessage)
    console.log("added message")
})
const message = showTime.querySelector('#welcome')

const div = message.querySelector('div')
div.textContent = (showTime)
