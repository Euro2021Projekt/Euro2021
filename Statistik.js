var map = L.map('map').setView([55.505, 9.54], 4);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);





//Marker hinzugefügt//
L.circleMarker([41.9028, 12.4964],{
    radius: 50,
    color: "gold"
}).addTo(map)
    .bindPopup("<h1>Italien</h1> <h1>1. Platz</h1>");

 L.circleMarker([40.4168, -3.7038],{
    icon: L.icon({
        iconAnchor: [16, 37],
        popupAnchor: [0, -37]
    })
}).addTo(map)
    .bindPopup("Spanien");

 L.circleMarker([55.6761, 12.5683],{
    icon: L.icon({
        
        iconAnchor: [16, 37],
        popupAnchor: [0, -37]
    })
}).addTo(map)
    .bindPopup("Dänemark");

L.circleMarker([51.5072, -0.1276],{
    radius: 40,
    color: "silver"
}).addTo(map)
    .bindPopup("<h1>England</h1> <h1>2. Platz</h1>");

 L.circleMarker([50.8476, 4.3572],{
    icon: L.icon({
        
        iconAnchor: [16, 37],
        popupAnchor: [0, -37]
    })
}).addTo(map)
    .bindPopup(" <h2>Belgien</h1> <h1>51 Spiele gespielt</h2>");

 L.circleMarker([52.3676, 4.9041],{
    icon: L.icon({
        iconAnchor: [16, 37],
        popupAnchor: [0, -37]
    })
}).addTo(map)
    .bindPopup("Niederlande");

 L.circleMarker([46.9480, 7.4474],{
    icon: L.icon({
        
        iconAnchor: [16, 37],
        popupAnchor: [0, -37]
    })
}).addTo(map)
    .bindPopup("Schweiz");

 L.circleMarker([38.7223, -9.1393],{
    icon: L.icon({
       
        iconAnchor: [16, 37],
        popupAnchor: [0, -37]
    })
}).addTo(map)
    .bindPopup("Portugal");

L.circleMarker([48.8566, 2.3522],{
    icon: L.icon({
        
        iconAnchor: [16, 37],
        popupAnchor: [0, -37]
    })
}).addTo(map)
    .bindPopup("France");

L.circleMarker([45.8150, 15.9819],{
    icon: L.icon({
        
        iconAnchor: [16, 37],
        popupAnchor: [0, -37]
    })
}).addTo(map)
    .bindPopup("Kroatien");

L.circleMarker([50.4501, 30.5234],{
    icon: L.icon({
       
        iconAnchor: [16, 37],
        popupAnchor: [0, -37]
    })
}).addTo(map)
    .bindPopup("Ukraine");

L.circleMarker([52.5200, 13.4050],{
    icon: L.icon({
        
        iconAnchor: [16, 37],
        popupAnchor: [0, -37]
    })
}).addTo(map)
    .bindPopup("Deutschland");

L.circleMarker([50.0755, 14.4378],{
    icon: L.icon({
       
        iconAnchor: [16, 37],
        popupAnchor: [0, -37]
    })
}).addTo(map)
    .bindPopup("Tschechische Republik");

L.circleMarker([48.2082, 16.3738],{
    icon: L.icon({
      
        iconAnchor: [16, 37],
        popupAnchor: [0, -37]
    })
}).addTo(map)
    .bindPopup("Österreich");

L.circleMarker([59.3293, 18.0686],{
    icon: L.icon({
       
        iconAnchor: [16, 37],
        popupAnchor: [0, -37]
    })
}).addTo(map)
    .bindPopup("Schweden");

 L.circleMarker([52.2297, 21.0122],{
    icon: L.icon({
        
        iconAnchor: [16, 37],
        popupAnchor: [0, -37]
    })
}).addTo(map)
    .bindPopup("Polen");

L.circleMarker([51.4837, -3.1681],{
    icon: L.icon({
        
        iconAnchor: [16, 37],
        popupAnchor: [0, -37]
    })
}).addTo(map)
    .bindPopup("Wales");

 L.circleMarker([47.4979, 19.0402],{
    icon: L.icon({
        
        iconAnchor: [16, 37],
        popupAnchor: [0, -37]
    })
}).addTo(map)
    .bindPopup("Ungarn");

L.cirlceMarker([55.7558, 37.6173],{
    icon: L.icon({
     
        iconAnchor: [16, 37],
        popupAnchor: [0, -37]
    })
}).addTo(map)
    .bindPopup("Russland");

L.circleMarker([48.1486, 17.1077],{
    icon: L.icon({
       
        iconAnchor: [16, 37],
        popupAnchor: [0, -37]
    })
}).addTo(map)
    .bindPopup("Slowakei");

L.circleMarker([41.9981, 21.4254],{
    icon: L.icon({
       
        iconAnchor: [16, 37],
        popupAnchor: [0, -37]
    })
}).addTo(map)
    .bindPopup("Nordmazedonien");

L.circleMarker([55.9533, -3.1883],{
    icon: L.icon({
       
        iconAnchor: [16, 37],
        popupAnchor: [0, -37]
    })
}).addTo(map)
    .bindPopup("Schottland");

L.circleMarker([39.9334, 32.8597],{
    icon: L.icon({
        
        iconAnchor: [16, 37],
        popupAnchor: [0, -37]
    })
}).addTo(map)
    .bindPopup("Türkei");

L.circleMarker([60.1699, 24.9384],{
    icon: L.icon({
        
        iconAnchor: [16, 37],
        popupAnchor: [0, -37]
    })
}).addTo(map)
    .bindPopup("Finnland");





