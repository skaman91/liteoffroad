<template>
    <div id="map" style="height: 93vh;"></div>
</template>

<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default {
  name: 'MapComponent',
  async mounted () {
    this.map = L.map('map').setView([60.024828, 30.338195], 10)

    // document.getElementById("msg").innerHTML = 'Загружаю точки...'
//osm Layer
    const OSM = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '<b>Liteoffroad "Застрянь друга"</b>'
    })
    OSM.addTo(this.map)

// OSM layer
    const cyclOSM = L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
      attribution: '<b>Liteoffroad "Застрянь друга"</b>'
    })

//google2 Layer
    const googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      attribution: '<b>Liteoffroad "Застрянь друга"</b>'
    })

//layer Controls
    const baseLayers = {
      "OpenStreetMap": OSM,
      "OSM": cyclOSM,
      "Google maps": googleSat
    }

    L.control.layers(baseLayers).addTo(this.map)

    await fetch('https://point-map.ru/points')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText)
        }
        return response.json()
      })
      .then(data => {
        console.log('data', data)
        //Markers
        // for (const point of data) {
        //   const rawCoorditares = point.coordinates.split(',')
        //   const name = point.name
        //   const circleText = name.split(' ')[1]
        //   const marker = new L.Marker.SVGMarker([rawCoorditares[0], rawCoorditares[1]], {
        //     iconOptions: {
        //       color: "rgb(84,84,243)",
        //       circleText: circleText,
        //       circleRatio: 0.65,
        //       fontSize: 10,
        //       fontWeight: 800
        //     }
        //   })
        //
        //   marker.addTo(this.map)
        //   const label = `<b>${name}<br>${rawCoorditares}<br>Рейтинг точки: ${point.rating}<br>Точку установил: ${point.installed}</b><br>${point.comment}`
        //   const popup = marker.bindPopup(label)
        //   popup.addTo(this.map)
        //   // document.getElementById("msg").innerHTML = ''
        // }

        data.forEach(marker => {
          const name = marker.name
          const circleText = marker.name.split(' ')[1]
          const rawCoorditares = marker.coordinates.split(',')
          const label = `<b>${name}<br>${rawCoorditares}<br>Рейтинг точки: ${marker.rating}<br>Точку установил: ${marker.installed}</b><br>${marker.comment}`
          const icon = L.divIcon({
            className: 'custom-div-icon',
            html: `<div class="custom-marker"><span class="number">${circleText}</span></div>`,

            // html: `<!--<div class="custom-marker"><img src="../img/marker.png" alt="Marker"><span class="number">${circleText}</span></div>-->`,
            iconSize: [30, 42],
            iconAnchor: [15, 42]
          });

          L.marker([rawCoorditares[0], rawCoorditares[1]], { icon }).addTo(this.map)
            .bindPopup(label);
        });
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error)
        // document.getElementById("msg").innerHTML = 'Ошибка. Попробуйте обновить страницу.'
      })
  }
}
</script>

<style>
#map {
    width: 100%;
    height: 100vh;
}

.leaflet-control-attribution > a {
    display: none;
}

.custom-div-icon .custom-marker {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("../img/marker.png");

    background-size: contain;
    background-repeat: no-repeat;
    margin-right: 100px;
    width: 60px;
    height: 95px;
}

.custom-div-icon .number {
    position: absolute;
    top: 20%;
    transform: translateY(-50%);
    color: black;
    font-size: 14px;
    font-weight: bold;
}
</style>
