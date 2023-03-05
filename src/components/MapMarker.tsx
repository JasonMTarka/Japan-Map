export const MapMarker = ({ map, title, position, label, icon }) => {
  const marker = new window.google.maps.Marker({
    position: position,
    title: title,
    label: label,
    icon: icon,
  });
  marker.setMap(map);
};
