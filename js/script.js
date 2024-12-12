// plugins-------------------------------------------------------------------------

// Aos---------------------
AOS.init();

// map---------------------
var map = L.map("map").setView([51.505, -0.09], 13);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// including marker
var marker = L.marker([51.5, -0.09]).addTo(map);
// Popups
marker.bindPopup("<b>Hello new costumer!</b><br>Here is Koko.").openPopup();

// Adding a circle
var circle = L.circle([51.508, -0.11], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
  radius: 500,
}).addTo(map);

// Adding a polygo
var polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047],
]).addTo(map);

function onMapClick(e) {
  alert("You clicked the map at " + e.latlng);
}

map.on("click", onMapClick);
