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
   }, {
       "Stadien": overlays.stadien
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
