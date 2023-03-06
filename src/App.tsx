import { createContext, useContext } from "react";
import { Map } from "./components/Map";
import { TEXT } from "./text";
import "./css/App.css";

const LANGUAGES = {
  eng: "eng",
  jp: "jp",
};

export const LanguageContext = createContext(LANGUAGES.eng);

function App() {
  const appTitle = TEXT[useContext(LanguageContext)].appTitle;

  return (
    <LanguageContext.Provider value={LANGUAGES.eng}>
      <div className="App">
        <header className="App-header">
          <p>{appTitle}</p>
        </header>
        <Map />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
