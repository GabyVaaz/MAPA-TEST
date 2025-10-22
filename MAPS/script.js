var map = L.map('mapCH');
var boundsSaoPauloEstado = [
  [-25.5, -53.1],
  [-19.9, -44.0]  
];

map.fitBounds(boundsSaoPauloEstado);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);