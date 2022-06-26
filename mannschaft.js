let zoom = 4;

// Kordinate: Zentrum von Europa
let coords = [47.751569, 1.675063];

let startLayer = L.tileLayer.provider("OpenStreetMap.Mapnik");

let map = L.map('map', {
    center: coords,
    zoom: zoom,
    layers: [
        startLayer
    ],
});

let layerControl = L.control.layers({
    "OpenStreetMap": startLayer,
    "Esri Topo Map": L.tileLayer.provider("Esri.WorldTopoMap"),
    "Esri Satellitenbild": L.tileLayer.provider("Esri.WorldImagery"),
    "Open Topo Map": L.tileLayer.provider("OpenTopoMap"),
    "Stamen Watercolor": L.tileLayer.provider("Stamen.Watercolor"),
}).addTo(map);



// Länder anzeigen
for (let länder of LÄNDER) {
    let popup = `
        <h1>${länder.name}</h1>
        <h3>${länder.info2}</h3>
        <h3>${länder.info1}</h3>
        
        <hr>
        <img src="${länder.image}" alt="Vorschaubild">
        
    `;


    L.marker([länder.lat, länder.lng], {
        icon: L.icon({
            iconUrl: länder.image,
            iconSize: [30, 30],
            iconAnchor: [0,0],
            popupAnchor: [0, -37]
        })

    }).addTo(map).bindPopup(popup);
}

L.control.scale({
    imperial: false,
}).addTo(map);

L.control.fullscreen().addTo(map);

let miniMap = new L.Control.MiniMap(
    L.tileLayer.provider("OpenStreetMap.Mapnik"), {
        toggleDisplay: true
    }
).addTo(map);