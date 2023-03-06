// Information regarding a specific location
interface PlaceInfo {
  title: string;
}

// Converts the latitude and longitude copy + pasted from Google Maps
// to format friendly to Google Maps API
const getCoords = (latitude: number, longitude: number) => {
  return { lat: latitude, lng: longitude };
};

// Get type used for map icon and filters
const LOCATION_TYPES = {
  battle: "battle",
  post_town: "post_town",
};

// Location info used for creating map markers
export interface Place {
  name: string;
  type: string;
  eng: PlaceInfo;
  jp: PlaceInfo;
  options: google.maps.MarkerOptions;
}

// Icons change depending on type of location
export const ICONS = {
  battle: "./icons/fire.svg",
  post_town: "./icons/horse.svg",
};

// List of places for pin creation
// TODO: set up backend for places
export const places: Place[] = [
  {
    name: "sekigahara",
    type: LOCATION_TYPES.battle,
    eng: { title: "Battle of Sekigahara" },
    jp: { title: "関ヶ原の戦い" },
    options: {
      position: getCoords(35.37076085128027, 136.461619413458),
    },
  },
  {
    name: "toba_fushimi",
    type: LOCATION_TYPES.battle,
    eng: { title: "Battle of Toba-Fushimi" },
    jp: { title: "鳥羽伏見の戦い" },
    options: {
      position: getCoords(34.950797029197815, 135.74315801747258),
    },
  },
  {
    name: "hakodate",
    type: LOCATION_TYPES.battle,
    eng: { title: "Battle of Hakodate" },
    jp: { title: "箱館戦争" },
    options: {
      position: getCoords(41.79702962109944, 140.7570123919054),
    },
  },
  {
    name: "narai_juku",
    type: LOCATION_TYPES.post_town,
    eng: { title: "Narai-juku" },
    jp: { title: "奈良井宿" },
    options: {
      position: getCoords(35.9688171879218, 137.81445916104605),
    },
  },
];
