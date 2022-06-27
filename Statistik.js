var map = L.map('map').setView([55.505, 9.54], 4);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


//Markercluster hinzugefügt//
let overlay = L.markerClusterGroup({
    disableClusteringAtZoom: 4
});


//Marker hinzugefügt//

for (let Stats of INFO) {
    let popup = `
        <h1>${Stats.Land}</h1>

        <h3>${Stats.Landesliga}</h3>
        
        <hr>
        <img src="${Stats.image}" alt="Vorschaubild">
        
    `;


    L.marker([Stats.lat, Stats.lng], {
        icon: L.icon({
            iconUrl: Stats.imgmarker,
            iconAnchor: [16, 37],
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



