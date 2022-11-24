
import './App.scss';
import HomePage from './pages/Home-page/Home-page';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import CasasPage from "./pages/Casas-page/Casas-page";
import CharacterPage from "./pages/Characters-page/Character-page";
import ChaDetailPage from "./pages/ChaDetail-page/ChaDetail-page";
import CasDetailPage from "./pages/CasDetail-page/CasDetail-page";
import CronologiaPage from "./pages/Cronologia-page/Cronologia-page";
import {useTranslation} from "react-i18next";
import {MyContext} from "./Context/MyContext";





function App() {
  const {t, i18n} = useTranslation(["translation"]);
  const changeLanguage = (code) => {
    i18n.changeLanguage(code)
  }

  
  return (
    <MyContext.Provider value={{t, changeLanguage}}>
    {/* <audio src='/game-thrones-song.mp3' autoPlay={true} loop controls></audio> */}
      <div>
        <Router>
          <Routes>
              <Route path="/" element={<HomePage></HomePage>}/>
              <Route path="/characters" element={<CharacterPage></CharacterPage>}/>
              <Route path="/characters/:idCharacters" element={<ChaDetailPage></ChaDetailPage>}/>
              <Route path="/casas" element={<CasasPage></CasasPage>}/>
              <Route path="/casas/:idCasas" element={<CasDetailPage></CasDetailPage>}/>
              <Route path="/cronologia" element={<CronologiaPage></CronologiaPage>}/>
          </Routes>
        </Router>

      </div>
    </MyContext.Provider>

  );
}

export default App;
