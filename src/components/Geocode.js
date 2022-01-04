import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyDPeCQiBwfzWpAi8n6zxC8NkhpStPuoTFQ");
Geocode.setLanguage("en");
Geocode.enableDebug();

const Address = (firstCord, secondCord) => {
  Geocode.fromAddress(firstCord).then(
    response => {
      const { lat, lng } = response.results[0].geometry.location;
      console.log("Starting point", lat, lng);
      //   return [lat, lng];
    },
    error => {
      console.error(error);
    }
  );
  Geocode.fromAddress(secondCord).then(
    response => {
      const { lat, lng } = response.results[0].geometry.location;
      console.log("Ending point", lat, lng);
      //   return [lat, lng];
    },
    error => {
      console.error(error);
    }
  );
};

export default Address;
