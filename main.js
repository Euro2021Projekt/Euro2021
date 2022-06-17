

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

    let stadionLayer = L.geoJSON(geojson, {
        pointToLayer: function (geoJsonPoint, latlng) {
            
            // searchList Console

            searchList.innerHTML += `<option value= "${geoJsonPoint.properties.Stadio_Name}"></option`;

            //console.log(document.querySelector("#searchList"));
            //console.log(`<option value= "${geoJsonPoint.properties.Stadio_Name}"></option`);

            let popup = `
            <strong>${geoJsonPoint.properties.Stadio_Name}</strong><br><hr>
            ${geoJsonPoint.properties.Land}, ${geoJsonPoint.properties.Stadt}<br>
            Stadionkapazität: ${geoJsonPoint.properties.Kapazität} Zuschauer<br>
            Anzahl der Spiele: ${geoJsonPoint.properties.Spiele_Num}
            `;
            return L.marker(latlng, {
                icon: L.icon({
                    iconUrl: `icons/stadium.png`,
                    iconAnchor: [17,36]

                })
            }).bindPopup(popup);

        }
    }).addTo(overlay);

    //Searchlist Funktion enablen

    let form = document.querySelector("#searchForm");
    form.suchen.onclick = function() {
        console.log(form.stadion.value);
        stadionLayer.eachLayer(function(marker){
        //console.log(marker)
            //console.log(marker.getLatLng())
            //console.log(marker.getPopup())
            //console.log(marker.feature.properties.Stadio_Name)

            if(form.stadion.value == marker.feature.properties.Stadio_Name) {
                //console.log(marker.getLatLng())
                //console.log(marker.getPopup())
                //console.log(marker.feature.properties.Stadio_Name)
                map.setView(marker.getLatLng(), 16);
                marker.openPopup();
                
            
            }
        })
    }
        
            
    }

loadStadien("data/stadien.geojson")



