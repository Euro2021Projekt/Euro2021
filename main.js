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
