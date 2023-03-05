import { createContext } from "react";
import { Map } from "./components/Map";
import "./css/App.css";

const LANGUAGES = {
  eng: "eng",
  jp: "jp",
};

export const LanguageContext = createContext(LANGUAGES.eng);

function App() {
  return (
    <LanguageContext.Provider value={LANGUAGES.eng}>
      <div className="App">
        <header className="App-header">
          <p>Japan Map</p>
        </header>
        <Map />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
