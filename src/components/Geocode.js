import React, { useState } from "react";
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyDPeCQiBwfzWpAi8n6zxC8NkhpStPuoTFQ");
Geocode.setLanguage("en");
Geocode.enableDebug();

const coordinates = {
  firstPnt: [],
  secondPnt: [],
};

const Address = (firstCord, secondCord) => {
  Geocode.fromAddress(firstCord).then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      console.log("Starting point", lat, lng);
      coordinates.firstPnt = [lat, lng];
      return coordinates.secondPnt;
    },
    (error) => {
      console.error(error);
    }
  );
  Geocode.fromAddress(secondCord).then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      console.log("Ending point", lat, lng);
      coordinates.secondPnt = [lat, lng];
      return coordinates.secondPnt;
    },
    (error) => {
      console.error(error);
    }
  );
  return coordinates;
};

export default Address;
