

let Prag = {
    lat: 50.088611,
    lng: 14.421389,
};



let startLayer = L.tileLayer.provider("Esri.WorldImagery");

let overlays = {
    stadien: L.featureGroup()
}

let map = L.map("map", {
    center: [Prag.lat, Prag.lng],
    zoom: 4,
    layers: [
        startLayer
    ],
});

let layerControl = L.control.layers({
    "Orthofoto": startLayer,

    "World Street Map": L.tileLayer.provider("Esri.WorldStreetMap"),

    "Topographische Karte": L.tileLayer.provider("OpenTopoMap"),

    "Schwarz-Weiß Karte": L.tileLayer.provider("Stamen.Toner"), 
}).addTo(map);

layerControl.expand();

L.control.fullscreen().addTo(map);

L.control.scale({
    imperial: false,
}).addTo(map);

let miniMap = new L.Control.MiniMap(
    L.tileLayer.provider("Esri.WorldImagery"), {
        toggleDisplay: true
    }
).addTo(map);

// Stadien in der Karte implementieren

async function loadStadien(url) {
    let response = await fetch(url);
    let geojson = await response.json();
    //console.log(`Geojson stadien: `, geojson)

    let overlay = L.featureGroup();
    layerControl.addOverlay(overlay, "Stadien");
    overlay.addTo(map)

    L.geoJSON(geojson, {
        pointToLayer: function (geoJsonPoint, latlng) {
            //console.log(geoJsonPoint.properties);
            //console.log(geoJsonPoint.geometry.coordinates)
            let popup = `
            <strong>${geoJsonPoint.properties.Stadio_Name}</strong><br>
            ${geoJsonPoint.properties.Land}, ${geoJsonPoint.properties.Stadt}<br>
            Stadionkapazität: ${geoJsonPoint.properties.Kapazität} Zuschauer<br>
            Anzahl der Spiele: ${geoJsonPoint.properties.Spiele_Num}
            `;
            return L.marker(latlng, {
                icon: L.icon({
                    iconUrl: `icons/stadium.png`,

                })
            }).bindPopup(popup);

        }
    }).addTo(overlay);
}

loadStadien("data/stadien.geojson")
