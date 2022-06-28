var map = L.map('map').setView([55.505, 9.54], 4);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.control.scale({
    imperial: false,
}).addTo(map);

L.control.fullscreen().addTo(map);

let miniMap = new L.Control.MiniMap(
    L.tileLayer.provider("OpenStreetMap.Mapnik"), {
        toggleDisplay: true
    }
).addTo(map);

var north = L.control({position: "bottomright"});
north.onAdd = function(map) {
    var div = L.DomUtil.create("div", "info legend");
    div.innerHTML = '<img src="icons/nord.png">';
    return div;
}
north.addTo(map);



//Marker hinzugefügt//
L.circleMarker([41.9028, 12.4964],{
    radius: 50,
    color: "gold"
}).addTo(map)
    .bindPopup("<h1>Italien</h1> <h1>1. Platz</h1>");

 L.circleMarker([40.4168, -3.7038],{
    radius: 20,
    color: "blue"
}).addTo(map)
    .bindPopup("<h1>Spanien</h1> <h1>Gruppenzweite</h1>");

 L.circleMarker([55.6761, 12.5683],{
    radius: 20,
    color: "blue"
}).addTo(map)
    .bindPopup("<h1>Dänemark</h1> <h1>Gruppenzweite</h1>");

L.circleMarker([51.5072, -0.1276],{
    radius: 40,
    color: "silver"
}).addTo(map)
    .bindPopup("<h1>England</h1> <h1>2. Platz</h1>");

 L.circleMarker([50.8476, 4.3572],{
 radius: 30,
 color: "blue"
}).addTo(map)
    .bindPopup("<h2>Belgien</h1> <h1>Gruppensieger</h1>");

 L.circleMarker([52.3676, 4.9041],{
    radius: 30,
    color: "blue"
}).addTo(map)
    .bindPopup("<h1>Niederlande</h1> <h1>Gruppensieger</h1>");

 L.circleMarker([46.9480, 7.4474],{
    radius: 10,
    color: "blue"
}).addTo(map)
    .bindPopup("<h1>Schweiz</h1> <h1>Beste Gruppendritte</h1>");

 L.circleMarker([38.7223, -9.1393],{
    radius: 10,
    color: "blue"
}).addTo(map)
    .bindPopup("<h1>Portugal</h1> <h1>Beste Gruppendritte</h1>");

L.circleMarker([48.8566, 2.3522],{
    radius: 30,
    color: "blue"
}).addTo(map)
    .bindPopup("<h2>Frankreich</h1> <h1>Gruppensieger</h1>");

L.circleMarker([45.8150, 15.9819],{
  radius: 20,
  color: "blue"
}).addTo(map)
    .bindPopup("<h1>Kroatien</h1> <h1>Gruppenzweite</h1>");

L.circleMarker([50.4501, 30.5234],{
   radius: 10,
   color: "blue"
}).addTo(map)
    .bindPopup("<h1>Ukraine</h1> <h1>Beste Gruppendritte</h1>");

L.circleMarker([52.5200, 13.4050],{
    radius: 20,
    color: "blue"
}).addTo(map)
    .bindPopup("<h1>Deutschland</h1> <h1>Gruppenzweite</h1>");

L.circleMarker([50.0755, 14.4378],{
  radius: 10,
  color:"blue"
}).addTo(map)
    .bindPopup("<h1>Tschechische Republik</h1> <h1>Beste Gruppendritte</h1>");

L.circleMarker([48.2082, 16.3738],{
   radius: 20,
   color: "blue"
}).addTo(map)
    .bindPopup("<h1>Österreich</h1> <h1>Gruppenzweite</h1>");

L.circleMarker([59.3293, 18.0686],{
    radius: 30,
    color: "blue"
}).addTo(map)
    .bindPopup("<h2>Schweden</h1> <h1>Gruppensieger</h1>");

 L.circleMarker([52.2297, 21.0122],{
   radius: 5,
   color: "blue"
}).addTo(map)
    .bindPopup("<h2>Polen</h1> <h1>Gruppenvierter</h1>");

L.circleMarker([51.4837, -3.1681],{
   radius: 20,
   color: "blue"
}).addTo(map)
    .bindPopup("<h1>Wales</h1> <h1>Gruppenzweite</h1>");

 L.circleMarker([47.4979, 19.0402],{
   radius: 5,
   color: "blue"
}).addTo(map)
    .bindPopup("<h2>Ungarn</h1> <h1>Gruppenvierter</h1>");

L.cirlceMarker([55.7558, 37.6173],{
  radius: 5,
  color: "blue"
}).addTo(map)
    .bindPopup("<h2>Russland</h1> <h1>Gruppenvierter</h1>");

L.circleMarker([48.1486, 17.1077],{
  radius: 10,
  color: "blue"
}).addTo(map)
    .bindPopup("<h1>Slowakei</h1> <h1>Beste Gruppendritte</h1>");

L.circleMarker([41.9981, 21.4254],{
  radius: 5,
  color: "blue"
}).addTo(map)
    .bindPopup("<h2>Nordmazedonien</h1> <h1>Gruppenvierter</h1>");

L.circleMarker([55.9533, -3.1883],{
    radius: 5,
    color: "blue"
}).addTo(map)
    .bindPopup("<h2>Schottland</h1> <h1>Gruppenvierter</h1>");

L.circleMarker([39.9334, 32.8597],{
    radius: 5,
    color: "blue"
}).addTo(map)
    .bindPopup("<h2>Türkei</h1> <h1>Gruppenvierter</h1>");

L.circleMarker([60.1699, 24.9384],{
  radius: 10,
  color: "blue"
}).addTo(map)
    .bindPopup("<h1>Finnland</h1> <h1>Beste Gruppendritte</h1>");





