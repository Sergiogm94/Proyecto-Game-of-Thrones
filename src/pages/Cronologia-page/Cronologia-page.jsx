import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Botones from "../../components/Botones/Botones";
import Footer from "../../components/Footer/Footer";
import "./Cronoligia-page.scss";
import SimpleBar from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';
import { MyContext } from "../../Context/MyContext";
import { Link } from "react-router-dom";


export default function CronologiaPage() {
    const { t } = useContext(MyContext)
    const [characters, setCharacters] = useState([]);
    const [edad, setEdad] = useState();
    const charactersOrder = [];
    const characterCouple = [];
    const characterOdd = [];
    
    for(let item of characters){
        if(item.age && item.age.age !== null && item.age.age !==undefined){
            charactersOrder.push(item)
        }
    }

    if (edad === false) {
        charactersOrder.sort((a,b) => parseFloat(b.age.age) - parseFloat(a.age.age)
        );

    } else{
        charactersOrder.sort((a,b) => parseFloat(a.age.age) - parseFloat(b.age.age));
    };

    for(let i = 0; i < charactersOrder.length; i++) {
        if(i % 2 === 0) {
            characterCouple.push(charactersOrder[i]);
        } else {
            characterOdd.push(charactersOrder[i]);
        }
    };
        console.log(characterCouple);
        console.log(characterOdd);
    useEffect(() => {
        const getData = async () => {
            const {data} = await axios.get("https://api.got.show/api/show/characters/");
            console.log(data);
            setCharacters(data);
        }

        getData();
    }, []);

    if (!characters) {
        return null;
    };
    


    return(
        <div className="casasPage">
            <Botones></Botones>
            <div className="container">
            <SimpleBar autoHide={false} style={{ maxHeight: 800 }}>
            <div>
                <button className="crono-btn" onClick={() => {edad === true ? setEdad(false) : setEdad(true)}}>{edad === true ? <span>{t("Ascendente")}</span> : <span>{t("Descendente")}</span>}</button>
                </div>
            <div className="cardContainer">
                <div className="cardContainerRight">
                {characterCouple.map((item, index) => {
                    return(
                        <Link className="decoration" to={`/characters/${item.name}`}>
                        <div className="card-content" key={index}>
                        <h3 className="textCro">{item.age?.age}</h3>
                            <h3 className="textCro">{item.name}</h3>
                            <img className="foto" src={item.image} alt="foto"></img>
                        </div>
                        </Link>
                    )
                })}
                </div>
                <div className="cardContainerLeft">
                {characterOdd.map((item, index) => {
                    return(
                        <Link className="decoration" to={`/characters/${item.name}`}>
                        <div className="card-content2" key={index}>
                        <h3 className="textCro">{item.age?.age}</h3>
                            <h3 className="textCro">{item.name}</h3>
                            <img className="foto" src={item.image} alt="foto"></img>
                        </div>
                        </Link>
                    )
                })}
                </div>
            </div>
            </SimpleBar>
            
            </div>
            
            <Footer></Footer>
        </div>
    )
}