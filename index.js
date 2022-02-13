let inputValue = document.getElementById("input-user")
let dispVal = document.getElementById("input-el")
let lengthVal = document.getElementById("length-value")
let volumeVal = document.getElementById("volume-value")
let strengthVal = document.getElementById("strength-value")
let kgToPound = 2.205
let litresToGallon = 4.546
let metersToFeet = 3.281
let litToGal = 0
let galToLit = 0
let kgToP = 0
let pToKg = 0
let mtToFt = 0
let ftToMt = 0

function convert(){
	dispVal.innerText = inputValue.value
	mtToFt = inputValue.value * 3.281
	ftToMt = inputValue.value / 3.281
	litToGal = inputValue.value / 3.785
	galToLit = inputValue.value * 3.785
	kgToP = inputValue.value * 2.205
	pToKg = inputValue.value / 2.205

	lengthVal.innerText = inputValue.value + " meters = " + 
	mtToFt.toFixed(3)+ " feet | " + inputValue.value + " feet = " + ftToMt.toFixed(3)+ " meters" 

	volumeVal.innerText = inputValue.value + " liters = " + 
	litToGal.toFixed(3)+ " gallons | " + inputValue.value + " gallons = " + galToLit.toFixed(3)+ " liters" 

	strengthVal.innerText = inputValue.value + " kgs = " + 
	mtToFt.toFixed(3)+ " pounds | " + inputValue.value + " pounds = " + ftToMt.toFixed(3)+ " kgs " 

}