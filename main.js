let center = {
    lat: 50.088611,
    lng: 14.421389,
    title: "Center (Prag)"
};

let startlayer = L.tileLayer.provider("Esri.WorldImagery")

let map = L.map("map", {
    center: [center.lat, center.lng],
    zoom: 2,
    layers: [
        startlayer
    ],
});

let layerControl = L.control.layers({
    "Orthofoto": startLayer,

    "World Street Map": L.tileLayer.provider("Esri.WorldStreetMap"),

    "Topographische Karte": L.tileLayer.provider("OpenTopoMap"),

    "Schwarz-Weiß Karte": L.tileLayer.provider("Stamen.Toner"),

}).addTo(map);
