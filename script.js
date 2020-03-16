let count = 0;
let meter_pointer = document.getElementById("meter-pointer");
let meter_digital = document.getElementById("meter-digital");

meter_pointer.style.transition = "1000ms"
meter_pointer.style.transform = "translateY(-50%) rotate(0deg)"

if (navigator.geolocation) {
// Geolocation APIに対応していない
} else {
  alert("Can't use Geolocation API");
}

function successFunc(position) {
	
	let speed = position.coords.speed;
	meter_digital.style.backgroundColor = "transparent";
	meter_digital.style.fontSize = "xx-large";
	// speed = 10;
	speed *= 3600/1000;
	meter_digital.innerText = speed;
	meter_pointer.style.transform = "translateY(-50%) rotate("+speed*(180/100)+"deg)";
}
function errorFunc(error){
	meter_digital.style.backgroundColor = "red";
	meter_digital.style.fontSize = "large";
	meter_digital.innerText = "EROOR("+error.code+"):"+error.message;
	// alert("EROOR("+error.code+"):"+error.message);
}
let option_object = {
	"enableHighAccuracy": false ,
	"timeout": 1000000 ,
	"maximumAge": 0 ,
}

navigator.geolocation.watchPosition( successFunc, errorFunc, option_object);