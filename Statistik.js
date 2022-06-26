var map = L.map('map').setView([55.505, 9.54], 4);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//Maßstab hinzugefügt//
L.control.scale({
    imperial: false,
}).addTo(map);

//Markercluster hinzugefügt//
let overlay = L.markerClusterGroup({
    disableClusteringAtZoom: 4
});


//Marker hinzugefügt//
L.marker([41.9028, 12.4964],{
    icon: L.icon({
        iconUrl: "icons/country.png",
        iconAnchor: [16, 37],
        popupAnchor: [0, -37]
    })
}  
    ).addTo(map)
    .bindPopup("Italien")
    .openPopup();

 L.marker([40.4168, -3.7038],{
    icon: L.icon({
        iconUrl: "icons/country.png",
        iconAnchor: [16, 37],
        popupAnchor: [0, -37]
    })
}).addTo(map)
    .bindPopup("Spanien")
    .openPopup();

 L.marker([55.6761, 12.5683],{
    icon: L.icon({
        iconUrl: "icons/country.png",
        iconAnchor: [16, 37],
        popupAnchor: [0, -37]
    })
}).addTo(map)
    .bindPopup("Dänemark")
    .openPopup();

L.marker([51.5072, -0.1276],{
    icon: L.icon({
        iconUrl: "icons/country.png",
        iconAnchor: [16, 37],
        popupAnchor: [0, -37]
    })
}).addTo(map)
    .bindPopup("England")
    .openPopup();

 L.marker([50.8476, 4.3572],{
    icon: L.icon({
        iconUrl: "icons/country.png",
        iconAnchor: [16, 37],
        popupAnchor: [0, -37]
    })
}).addTo(map)
    .bindPopup("Belgien")
    .openPopup();

 L.marker([52.3676, 4.9041],{
    icon: L.icon({
        iconUrl: "icons/country.png",
        iconAnchor: [16, 37],
        popupAnchor: [0, -37]
    })
}).addTo(map)
    .bindPopup("Niederlande")
    .openPopup();

 L.marker([46.9480, 7.4474],{
    icon: L.icon({
        iconUrl: "icons/country.png",
        iconAnchor: [16, 37],
        popupAnchor: [0, -37]
    })
}).addTo(map)
    .bindPopup("Schweiz")
    .openPopup();

 L.marker([38.7223, -9.1393],{
    icon: L.icon({
        iconUrl: "icons/country.png",
        iconAnchor: [16, 37],
        popupAnchor: [0, -37]
    })
}).addTo(map)
    .bindPopup("Portugal")
    .openPopup();

L.marker([48.8566, 2.3522],{
    icon: L.icon({
        iconUrl: "icons/country.png",
        iconAnchor: [16, 37],
        popupAnchor: [0, -37]
    })
}).addTo(map)
    .bindPopup("France")
    .openPopup();

L.marker([45.8150, 15.9819],{
    icon: L.icon({
        iconUrl: "icons/country.png",
        iconAnchor: [16, 37],
        popupAnchor: [0, -37]
    })
}).addTo(map)
    .bindPopup("Kroatien")
    .openPopup();

L.marker([50.4501, 30.5234],{
    icon: L.icon({
        iconUrl: "icons/country.png",
        iconAnchor: [16, 37],
        popupAnchor: [0, -37]
    })
}).addTo(map)
    .bindPopup("Ukraine")
    .openPopup();

L.marker([52.5200, 13.4050],{
    icon: L.icon({
        iconUrl: "icons/country.png",
        iconAnchor: [16, 37],
        popupAnchor: [0, -37]
    })
}).addTo(map)
    .bindPopup("Deutschland")
    .openPopup();

L.marker([50.0755, 14.4378],{
    icon: L.icon({
        iconUrl: "icons/country.png",
        iconAnchor: [16, 37],
        popupAnchor: [0, -37]
    })
}).addTo(map)
    .bindPopup("Tschechische Republik")
    .openPopup();

L.marker([48.2082, 16.3738],{
    icon: L.icon({
        iconUrl: "icons/country.png",
        iconAnchor: [16, 37],
        popupAnchor: [0, -37]
    })
}).addTo(map)
    .bindPopup("Österreich")
    .openPopup();

L.marker([59.3293, 18.0686],{
    icon: L.icon({
        iconUrl: "icons/country.png",
        iconAnchor: [16, 37],
        popupAnchor: [0, -37]
    })
}).addTo(map)
    .bindPopup("Schweden")
    .openPopup();

 L.marker([52.2297, 21.0122],{
    icon: L.icon({
        iconUrl: "icons/country.png",
        iconAnchor: [16, 37],
        popupAnchor: [0, -37]
    })
}).addTo(map)
    .bindPopup("Polen")
    .openPopup();

L.marker([51.4837, -3.1681],{
    icon: L.icon({
        iconUrl: "icons/country.png",
        iconAnchor: [16, 37],
        popupAnchor: [0, -37]
    })
}).addTo(map)
    .bindPopup("Wales")
    .openPopup();

 L.marker([47.4979, 19.0402],{
    icon: L.icon({
        iconUrl: "icons/country.png",
        iconAnchor: [16, 37],
        popupAnchor: [0, -37]
    })
}).addTo(map)
    .bindPopup("Ungarn")
    .openPopup();

L.marker([55.7558, 37.6173],{
    icon: L.icon({
        iconUrl: "icons/country.png",
        iconAnchor: [16, 37],
        popupAnchor: [0, -37]
    })
}).addTo(map)
    .bindPopup("Russland")
    .openPopup();

L.marker([48.1486, 17.1077],{
    icon: L.icon({
        iconUrl: "icons/country.png",
        iconAnchor: [16, 37],
        popupAnchor: [0, -37]
    })
}).addTo(map)
    .bindPopup("Slowakei")
    .openPopup();

L.marker([41.9981, 21.4254],{
    icon: L.icon({
        iconUrl: "icons/country.png",
        iconAnchor: [16, 37],
        popupAnchor: [0, -37]
    })
}).addTo(map)
    .bindPopup("Nordmazedonien")
    .openPopup();

L.marker([55.9533, -3.1883],{
    icon: L.icon({
        iconUrl: "icons/country.png",
        iconAnchor: [16, 37],
        popupAnchor: [0, -37]
    })
}).addTo(map)
    .bindPopup("Schottland")
    .openPopup();

L.marker([39.9334, 32.8597],{
    icon: L.icon({
        iconUrl: "icons/country.png",
        iconAnchor: [16, 37],
        popupAnchor: [0, -37]
    })
}).addTo(map)
    .bindPopup("Türkei")
    .openPopup();

L.marker([64.1466, -21.9426],{
    icon: L.icon({
        iconUrl: "icons/country.png",
        iconAnchor: [16, 37],
        popupAnchor: [0, -37]
    })
}).addTo(map)
    .bindPopup("Finnland")
    .openPopup();


   
    