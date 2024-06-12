/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input-el")
let lengthEl = document.getElementById("len")
let volumeEl = document.getElementById("vol")
let massEl = document.getElementById("mass")


convertBtn.addEventListener("click", function() {
    let inputNum = parseInt(inputEl.value)
    lengthEl.textContent = ""
    volumeEl.textContent = ""
    massEl.textContent = ""

    lengthEl.textContent = `${inputNum} Meters = ${metersTofeet(inputNum)} Feet |  ${inputNum} Feet = ${feetToMeters(inputNum)} Meters`
    
    volumeEl.textContent = `${inputNum} Liters = ${litersToGallons(inputNum)} Gallons |  ${inputNum} Gallons = ${gallonsToLiters(inputNum)} Liters`

    massEl.textContent = `${inputNum} Kilograms = ${kilosToPounds(inputNum)} Pounds |  ${inputNum} Pounds = ${poundsToKilos(inputNum)} Kilograms`
})

function metersTofeet (num) {
     let feet = (num * 3.281).toFixed(3)
     return feet
}

function feetToMeters (num) {
   let meters = (num/3.281).toFixed(3)
   return meters
}

function litersToGallons (num) {
    let gallons = (num * 0.264).toFixed(3)
    return gallons
}

function gallonsToLiters (num) {
  let liters = (num/0.264).toFixed(3)
  return liters
}

function kilosToPounds (num) {
    let pounds = (num * 2.204).toFixed(3)
    return pounds
}

function poundsToKilos (num) {
  let kilos = (num/2.204).toFixed(3)
  return kilos
}



