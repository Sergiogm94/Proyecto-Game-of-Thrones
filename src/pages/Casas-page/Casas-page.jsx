import axios from "axios";
import { useEffect, useState } from "react";
import Botones from "../../components/Botones/Botones";
import Footer from "../../components/Footer/Footer";
import "./Casas-page.scss";
import SimpleBar from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';
import {Link} from "react-router-dom";
import Filter from "../../components/Filter/Filter";




export default function CasasPage() {
    const [houses, setHouses] = useState([]);
    const [housesFiltered, sethousesFiltered] = useState([]);
    const imagen = "/trono-de-hierro.png";
    useEffect(() => {
        const getData = async () => {
            const {data} = await axios.get("https://api.got.show/api/show/houses");
            console.log(data);
            setHouses(data);
            sethousesFiltered(data);
        }

        getData();
    }, []);

    const searchHouses = (name) => {
        const filtered = houses.filter((house) => house.name.toLowerCase().includes(name.toLowerCase()))
        sethousesFiltered(filtered);
    };
    
    return(
        <div className="casasPage">
        <Filter setSearch={searchHouses}></Filter>
            <div>
                <Botones></Botones>
            </div>
            <SimpleBar style={{ maxHeight: 780 }}>
            <div>
            <div className="card">
            {housesFiltered.map((item, index) => {
                return(
                    <div className="casasImg" key={index}>
                    {item.logoURL == null ? item.logoURL = imagen : null}
                    <Link to={`/casas/${item.name}`} >
                     <img className="imgEsc" src={item.logoURL} alt="imagen"></img></Link>
                    <h3 className="nameHouse">{item.name}</h3>
                </div>
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