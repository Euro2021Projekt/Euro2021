let Prag = {
    lat: 50.088611,
    lng: 14.421389,
};

let startLayer = L.tileLayer.provider("Esri.WorldImagery");

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
