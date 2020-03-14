let count = 0;
let meter_pointer = document.getElementById("meter-pointer");
let meter_digital = document.getElementById("meter-digital");
let meter_number_plate = document.getElementById("meter-number-plate");

meter_pointer.style.transition = "500ms"
meter_pointer.style.transform = "translateY(-50%) rotate(0deg)";
meter_digital.innerText = count;

meter_number_plate.onclick = function(){
	count += 45;
	meter_pointer.style.transform = "translateY(-50%) rotate("+count+"deg)";
	meter_digital.innerText = count*(100/180);
};

if (navigator.geolocation) {
  alert("この端末では位置情報が取得できます");
// Geolocation APIに対応していない
} else {
  alert("この端末では位置情報が取得できません");
}

function successFunc(position) {
	speed = position.coords.speed;
	meter_digital.innerText = speed;
	meter_pointer.style.transform = "translateY(-50%) rotate("+speed+"deg)";
}
function errorFunc(error){
	let errorMessage = {
		0: "原因不明のエラー",
		1: "許可がありません",
		2: "電波状況等",
		3: "タイムアウト",
	};
	alert(errorMessage[error.code]);
}
let option_object = {
	"enableHighAccuracy": false ,
	"timeout": 1000000 ,
	"maximumAge": 0 ,
}

navigator.geolocation.watchPosition( successFunc, errorFunc, option_object);