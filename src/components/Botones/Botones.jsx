import { useContext } from "react";
import { Link } from "react-router-dom"
import "./Botones.scss";
import { MyContext } from '../../Context/MyContext';


export default function Botones() {
    const { changeLanguage} = useContext(MyContext)
    return(
        <div className="divbanderas">
        <Link to="/">
            <img  className="banderas castilloHome" src="../castillo.png" alt=""></img>
            </Link>
            <button className="btn2" onClick={() => changeLanguage("es")}></button>
            <button className="btn3" onClick={() => changeLanguage("en")}></button>
        </div>
    )
};
