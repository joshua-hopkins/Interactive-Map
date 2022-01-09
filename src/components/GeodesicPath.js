import L from "leaflet";
import { GeodesicLine } from "leaflet.geodesic";

const GeodesicPath = (props) => {
  const loc1 = props.firstPnt;
  const loc2 = props.secondPnt;

  console.log("Here is the first point", loc1);

  var container = L.DomUtil.get("map");

  if (container != null) {
    container._leaflet_id = null;
  }

  let map = L.map("map");

  let A = L.marker(loc1).addTo(map);
  let B = L.marker(loc2).addTo(map);

  const distance = L.geodesic([A.getLatLng(), B.getLatLng()], {
    weight: 20,
    opacity: 0.5,
    color: "red",
    steps: 4,
  }).addTo(map);
};

export default GeodesicPath;
