import React from "react";
import { SECRETS } from "../secrets";
import GoogleMapReact from "google-map-react";
import "../css/map.css";

export const Map = () => {
  const source = `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ51cu8IcbXWARiRtXIothAS4&key=${SECRETS.googleApiKey}`;

  return (
    <iframe title="map" width="80%" height="80%" loading="lazy" src={source} />
  );
};

// export const Map = () => (
//   <div className="map">
//     <div className="google-map">
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: SECRETS.googleApiKey }}
//         defaultCenter={{ lat: 35.6762, lng: 139.6503 }}
//         defaultZoom={12}
//       ></GoogleMapReact>
//     </div>
//   </div>
// );
