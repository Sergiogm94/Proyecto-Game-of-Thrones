import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ChaDetail-page.scss";
import SimpleBar from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';
import Botones from "../../components/Botones/Botones";
import { MyContext } from "../../Context/MyContext";
export default function ChaDetailPage() {
    // const {t} = useContext(MyContext)
    const {idCharacters} = useParams();
    const [character, setCharacter] = useState();
    const [houses, setAllHouses] = useState();
    const navigate = useNavigate();
    console.log(idCharacters);
    const { t } = useContext(MyContext)
    useEffect(() => {
        const getHouses = async (house) => {
            const {data} = await axios.get(`https://api.got.show/api/show/houses/` + house);
            console.log(data);
            setAllHouses(data);
        }
        const getData = async () => {
            const {data} = await axios.get(`https://api.got.show/api/show/characters/${idCharacters}`);
            console.log(data);
            setCharacter(data);
            await getHouses(data.house)
        }
        getData();
    }, [])
    return(
        <div className="casasPage color">
        <div className="mezclaBotones">
            <div>
                <button className="back" onClick={() => navigate("/characters")}>&#8678;{t("Volver")}</button>
            </div>
            <div>
                <Botones></Botones>
            </div>
        </div>
                <div>
                    <div className="centro alto">
                        <img className="imgchadetail" src={character?.image} alt="imagen"></img>
                    </div>
                    <div>
                        <h1 className="h1chadetail h2cha">{character?.name}</h1>
                    </div>
                </div>
            <div className="infochadetail izq">
                <div className="tamaño">
                    <h2 className="h2">{t("CASA")}</h2>
                    {houses?.map((item, index) => {
                        return(
                            <div key={index}>
                                <img className="detalleescudo" src={item.logoURL} alt="casa"></img>
                            </div>
                        )
                    })}
                </div>
                <div className="tamaño">
                    <h2 className="h2">{t("ALIANZAS")}</h2>
                    <ul>{character?.allegiances.map((item, index) => {
                        return(
                            <li className="p" key={index}>
                                {item}
                            </li>
                        )
                    })}</ul>
                </div>
                <div className="tamaño">
                    <h2 className="h2">{t("APARICIONES")}</h2>
                    <SimpleBar autoHide={false} style={{ maxHeight: 150 }}>
                        <ul>{character?.appearances.map((item,index) => {
                            return(
                                <li className="p" key={index}>
                                {item}
                                </li>
                            )
                        })}</ul>
                    </SimpleBar>
                </div>
                <div className="tamaño">
                    <h2 className="h2">{t("PADRE")}</h2>
                    <p className="p">{character?.father}</p>
                </div>
                <div className="tamaño">
                    <h2 className="h2">{t("HERMANOS")}</h2>
                    <ul>{character?.siblings.map((item, index) => {
                        return(
                            <li className="p" key={index}>
                                {item}
                            </li>
                        )
                    })}</ul>
                </div>
                <div className="tamaño">
                    <h2 className="h2">TITULOS</h2>
                    <SimpleBar autoHide={false} style={{maxHeight: 150}}>
                        <ul>{character?.titles.map((item, index) => {
                            return(
                                <li className="p" key={index}>
                                    {item}
                                </li>
                            )
                        })}</ul>
                    </SimpleBar>
                </div>
            </div>
        </div>
    )
}