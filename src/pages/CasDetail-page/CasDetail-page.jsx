import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./CasDetail-page.scss";
import Botones from "../../components/Botones/Botones";
import { MyContext } from "../../Context/MyContext";
export default function CasDetailPage(){
    const { t } = useContext(MyContext)
    const {idCasas} = useParams();
    const [casas, setCasas] = useState();
    const navigate = useNavigate();
    console.log(idCasas);
    useEffect(() => {
        const getData = async () => {
            const {data} = await axios.get(`https://api.got.show/api/show/houses/${idCasas}`);
            console.log(data);
            setCasas(data);
        }
        getData();
    }, [])
    return(
        <div className="color casasPage">
        <div className="mezclaBotones">
        <div>
        <button className="back" onClick={() => navigate("/casas")}>&#8678;{t("Volver")}</button>
        </div>
        <div>
        <Botones></Botones>
        </div>
        </div>
            <div className="centro">
                {casas?.map((item, index) => {
                    return(
                        <div key={index}>
                            <div className="centro alto">
                                <img className="imgcasdetail" src={item.logoURL} alt="imagen"></img>
                            </div>
                            <div className="h1casdetail h2">
                                <h1 className="h1">{item.name}</h1>
                            </div>
                        </div>
                    )
                }
                )}
            </div>
            <div className="infocasdetail izq">
                <div>
                    <h2 className="h2">{t("LEMA")}</h2>
                    {casas?.map((item, index) => {
                        return(
                            <div key={index}>
                                <p className="p">{item.words}</p>
                            </div>
                        )
                    })}
                </div>
                <div>
                    <h2 className="h2">{t("SEDE")}</h2>
                    {casas?.map((item, index) => {
                        return(
                            <div key={index}>
                                <ul key={index}>
                                    {item.seat.map((it, index) => {
                                        return(
                                        <li  className="p" key={index}>{it}</li>
                                    )
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                </div>
                <div>
                    <h2 className="h2">{t("REGION")}</h2>
                    {casas?.map((item, index) => {
                        return(
                            <div key={index}>
                                <ul key={index}>
                                {item.region.map((it, index) => {
                                    return(
                                        <li className="p" key={index}>{it}</li>
                                    )
                                })}
                                </ul>
                            </div>
                        )
                    })}
                </div>
                <div>
                    <h2 className="h2">{t("ALIANZAS")}</h2>
                    {casas?.map ((item, index) => {
                        return(
                        <ul key={index}>
                            {item.allegiance.map((it, index) => {
                                return(
                                    <li className="p" key={index}>{it}</li>
                            )
                        })}
                        </ul>
                    )
                })}
                </div>
                <div>
                <h2 className="h2">{t("RELIGIONES")}</h2>
                {casas?.map((item, index) => {
                    return (
                        <div key={index}>
                            <p className="p">{item.religion}</p>
                        </div>
                    )
                })}
                </div>
                <div>
                <h2 className="h2">{t("FUNDACION")}</h2>
                {casas?.map((item, index) => {
                    return(
                        <div key={index}>
                            <p>{item.createdAt}</p>
                        </div>            
                    )
                })}
                </div>
            </div>
        </div>
  )
}