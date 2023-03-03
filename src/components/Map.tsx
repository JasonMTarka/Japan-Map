import { SECRETS } from "../secrets";
import GoogleMapReact from "google-map-react";
import "../css/map.css";

export const Map = () => (
  <div className="map">
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: SECRETS.googleApiKey }}
        defaultCenter={{ lat: 35.6762, lng: 139.6503 }}
        defaultZoom={12}
        yesIWantToUseGoogleMapApiInternals
      ></GoogleMapReact>
    </div>
  </div>
);
