import React, { useState, useEffect } from "react";
import L, { map } from "leaflet";

const LMap = () => {
  useEffect(() => {
    let map = L.map("map").setView([32.83, -83.62], 6);

    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken: process.env.REACT_APP_OPENMAPS
      }
    ).addTo(map);
  });

  return null;
};

export default LMap;

// <div className="Map">
//   <link
//     rel="stylesheet"
//     href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
//     integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
//     crossorigin=""
//   />
//   <script
//     src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
//     integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
//     crossorigin=""
//   ></script>
//   <div id="leafletmap"></div>
// </div>
// <MapContainer center={[32.83, -83.62]} zoom={12} scrollWheelZoom={true}>
//   <TileLayer
//     url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
//     attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors, Imagery © <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>"
//     maxZoom={18}
//     tileSize={512}
//     id="mapbox/streets-v11"
//     zoomOffset={-1}
//     accessToken=""
//   />
// </MapContainer>
