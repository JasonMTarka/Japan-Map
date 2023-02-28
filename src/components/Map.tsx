import { SECRETS } from "../secrets";
import "../css/map.css";

export const Map = () => {
  const source = `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ51cu8IcbXWARiRtXIothAS4&key=${SECRETS.googleApiKey}`;

  return (
    <iframe title="map" width="80%" height="80%" loading="lazy" src={source} />
  );
};
