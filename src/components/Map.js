import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const LMap = () => {
  return (
    <MapContainer center={[32.83, -83.62]} zoom={12} scrollWheelZoom={true}>
      <TileLayer
        url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
        attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors, Imagery © <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>"
        maxZoom={18}
        tileSize={512}
        id="mapbox/streets-v11"
        zoomOffset={-1}
        accessToken="pk.eyJ1IjoiamdoNjAxIiwiYSI6ImNreGFxbXEwcTBydTUydm12c3ZuN21vbHgifQ.3wXWz7AI5lhGvNoLg-245Q"
      />
    </MapContainer>
  );
};

export default LMap;
