let startlayer = L.tileLayer.provider("Esri.WorldImagery")

let map = L.map("map", {
    zoom: 2,
    layers: [
        startlayer
    ],
});
