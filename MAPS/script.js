// básico do mapa
var map = L.map('mapCH').setView([-14.2350, -51.9253], 4);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const states = [
  'ac','al','am','ap','ba','ce','df','es','go','ma','mg','ms','mt',
  'pa','pb','pe','pi','pr','rj','rn','ro','rr','rs','sc','se','sp','to'
];

const basePath = 'data/geodata-br-states/geodata-br-states/geojson/br_states/';

function getStateName(p) {
  return p.name || p.NOME_UF || p.NM_ESTADO || p.sigla || 'Estado';
}

states.forEach(sigla => {
  const path = `${basePath}br_${sigla}.json`;

  fetch(path)
    .then(r => {
      if (!r.ok) throw new Error(`Erro ${r.status}`);
      return r.json();
    })
    .then(data => {
      L.geoJSON(data, {
        style: {
          color: "#3c3838ff",    
          weight: 1.0,         
          fillColor: "#3579d3ff", 
          fillOpacity: 0.5     
        },
        onEachFeature: (feature, layer) => {
          const nome = getStateName(feature.properties || {});
          layer.bindPopup(`<b>${nome}</b>`);
        }
      }).addTo(map);
    })
});