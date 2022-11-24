import { useContext } from "react";
import Botones from "../../components/Botones/Botones";
import Footer from "../../components/Footer/Footer";
import { MyContext } from "../../Context/MyContext";

import "./Home-page.scss";

export default function HomePage () {
  const {t} = useContext(MyContext)
  return (
    <div className="general">
      <h1 className="text">{t("juegodetronos")}</h1>
    <Botones></Botones>
    <Footer></Footer>
    </div>
  )
}


