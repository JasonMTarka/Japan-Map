import { useRef, useEffect, ReactElement, useContext } from "react";
import { LanguageContext } from "../App";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { SECRETS } from "../secrets";
import { Place, ICONS, places } from "../places";
import "../css/map.css";

const render = (status: Status): ReactElement => {
  if (status === Status.LOADING) return <h3>{status} ..</h3>;
  if (status === Status.FAILURE) return <h3>{status} ...</h3>;
  return null;
};

export const createMapMarker = (
  place: Place,
  map: google.maps.Map,
  language: string
) => {
  place.options.icon = ICONS[place.type];
  place.options.title = place[language];
  place.options.label = place[language];

  const marker = new window.google.maps.Marker(place.options);
  marker.setMap(map);
};

const GoogleMap = ({
  center,
  zoom,
}: {
  center: google.maps.LatLngLiteral;
  zoom: number;
}) => {
  const ref = useRef();
  const language = useContext(LanguageContext);

  useEffect(() => {
    const map = new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });

    for (const place of places) {
      createMapMarker(place, map, language);
    }
  }, [center, zoom, language]);

  return (
    <div className="map">
      <div ref={ref} id="map" className="google-map" />
    </div>
  );
};

export const Map = () => {
  return (
    <Wrapper apiKey={SECRETS.googleApiKey} render={render}>
      <GoogleMap
        center={{ lat: 35.68598708672295, lng: 139.7527063235832 }}
        zoom={13}
      ></GoogleMap>
    </Wrapper>
  );
};
