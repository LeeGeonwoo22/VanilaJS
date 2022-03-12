// 와이파이 , gps 등 이 코드 한줄로 해결된다.
const weatherAPI = `26ed9233aeb14d4a5b44c70be14b095f`;

function onGeoSucess(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in! : 위도 - ", lat.toFixed(1), "경도 - ", lng.toFixed(1))
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${weatherAPI}&units=metric`;
    console.log(url);
    fetch(url).then(res=> res.json())
}

function onGeoError(){
    alert("Can't find you. No weather for you.")
}
navigator.geolocation.getCurrentPosition(onGeoSucess, onGeoError)

// const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherAPI}&units=metric`;