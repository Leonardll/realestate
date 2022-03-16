import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { React, useState, useCallback } from "react";

const containerStyle = {
  width: "auto",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};
export const MyComponent = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.googleMapsApiKey,
    //libraries: [],
    //url:"https://maps.googleapis.com/maps/api/js"
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};
