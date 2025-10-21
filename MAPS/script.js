var map = L.map('mapID');
var boundsSaoPauloEstado = [
  [-25.5, -53.1],
  [-19.9, -44.0]  
];

map.fitBounds(boundsSaoPauloEstado);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


L.marker([20.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();

L.marker([-22.0, -47]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();


var map = L.map('mapCH');
var boundsSaoPauloEstado = [
  [-25.5, -53.1],
  [-19.9, -44.0]  
];

map.fitBounds(boundsSaoPauloEstado);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);