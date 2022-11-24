import {NavLink} from "react-router-dom";
import "./Footer.scss";
import { MyContext } from '../../Context/MyContext'
import { useContext } from "react";


export default function Footer(){
    const {t} = useContext(MyContext)
    return(
        <div className="divfooter">
            <NavLink activeclassname={"active"} className="link" to="/characters"><h1 className="texto">{t("personajes")}</h1></NavLink>
            <NavLink activeclassname={"active"} className="link" to="/casas"><h1 className="texto">{t("casas")}</h1></NavLink>
            <NavLink activeclassname={"active"} className="link" to="/cronologia"><h1 className="texto">{t("cronologia")}</h1></NavLink>
        </div>
    )

}

