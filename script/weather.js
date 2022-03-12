const weatherAPI = `26ed9233aeb14d4a5b44c70be14b095f`;
const lat = position.coords.latitude;
const lng = position.coords.longitude;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${weatherAPI}&units=metric`;

