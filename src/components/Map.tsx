import { useRef, useEffect, ReactElement } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { SECRETS } from "../secrets";
import "../css/map.css";

const render = (status: Status): ReactElement => {
  if (status === Status.LOADING) return <h3>{status} ..</h3>;
  if (status === Status.FAILURE) return <h3>{status} ...</h3>;
  return null;
};

const GoogleMap = ({
  center,
  zoom,
}: {
  center: google.maps.LatLngLiteral;
  zoom: number;
}) => {
  const ref = useRef();

  useEffect(() => {
    const map = new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });

    const svgMarker = {
      path: "M-1.547 12l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM0 0q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
      fillColor: "blue",
      fillOpacity: 1,
      strokeWeight: 0,
      rotation: 0,
      scale: 2,
      anchor: new google.maps.Point(0, 20),
    };

    const battle1 = new window.google.maps.Marker({
      position: { lat: 35.37076085128027, lng: 136.461619413458 },
      title: "Battle of Sekigahara",
      label: "関ヶ原",
      icon: svgMarker,
    });

    battle1.setMap(map);
  });

  return (
    <div className="map">
      <div ref={ref} id="map" className="google-map">
        TEST
      </div>
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
