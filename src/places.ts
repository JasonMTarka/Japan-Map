export interface Place {
  name: string;
  type: string;
  eng: string;
  jp: string;
  options: google.maps.MarkerOptions;
}

const getCoords = (latitude: number, longitude: number) => {
  return { lat: latitude, lng: longitude };
};

const LOCATION_TYPES = {
  battle: "battle",
};

export const ICONS = {
  battle: "./icons/fire.svg",
};

export const places: Place[] = [
  {
    name: "sekigahara",
    type: LOCATION_TYPES.battle,
    eng: "Battle of Sekigahara",
    jp: "関ヶ原の戦い",
    options: {
      position: getCoords(35.37076085128027, 136.461619413458),
    },
  },
  {
    name: "toba_fushimi",
    type: LOCATION_TYPES.battle,
    eng: "Battle of Toba-Fushimi",
    jp: "鳥羽伏見の戦い",
    options: {
      position: getCoords(34.950797029197815, 135.74315801747258),
    },
  },
  {
    name: "hakodate",
    type: LOCATION_TYPES.battle,
    eng: "Battle of Hakodate",
    jp: "箱館戦争",
    options: {
      position: getCoords(41.79702962109944, 140.7570123919054),
    },
  },
];
