import axios from "axios";
import { useEffect, useState } from "react";
import Botones from "../../components/Botones/Botones";
import Footer from "../../components/Footer/Footer";
import "./Character-page.scss"
import SimpleBar from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';
import {Link} from "react-router-dom";
import Filter from "../../components/Filter/Filter"
export default function CharacterPage() {
    const [character, setCharacter] = useState([]);
    const [characterFiltered, setCharacterFiltered] = useState ([]);
    useEffect(() => {
        const getData = async () => {
            const {data} = await axios.get("https://api.got.show/api/show/characters/");
            console.log(data);
            setCharacter(data);
            setCharacterFiltered(data);
        }
        getData();
    }, []);
    const searchCharacters = (name) => {
        const filtered = character.filter((char) => char.name.toLowerCase().includes(name.toLowerCase()))
        setCharacterFiltered(filtered)
    }
    return(
        <div className="casasPage">
            <div className="mezclabotones">
                <div>
                    <Filter setSearch={searchCharacters}></Filter>
                </div>
                <div>
                    <Botones></Botones>
                </div>
            </div>
            {/* autoHide true solo aparece el scroll cuando hay un sitio donde podemos utilizarlo, y tenemos el puntero encima */}
            <SimpleBar className="barra" autoHide={false} style={{ maxHeight: 750 }}>
            <div>
                <div className="card">
                    {characterFiltered.map((item, index) => {
                        return(
                            <Link to={`/characters/${item.name}`}> 
                            <div key={index} className="cardCha">
                                <div>
                                    <img className="imgCha" src={item.image} alt=""></img>
                                </div>
                                <div className="nombre">
                                    <h2 className="textoN">{item.name}</h2>
                                </div>
                            </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
            </SimpleBar>
            <div>
                <Footer></Footer>
            </div>
        </div>
    )
}