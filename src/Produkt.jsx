import { Link } from 'react-router-dom';
import React, { useState } from "react";
import Card from './Card';


function Produkt(props){
    
    const [intelImg, setIntelImg] = useState("./src/assets/intelcore.jpg")

    const changeImg = (cislo) => {
        if(cislo === 1){
            setIntelImg("./src/assets/intelcore.jpg")
        }
        else if (cislo === 2){
            setIntelImg("./src/assets/intel9.jpg")
        }
        else if(cislo === 3){
            setIntelImg("./src/assets/intel99.jpg")
        }
    }

    const handleClick = (e) => {
        e.target.textContent="Načítava sa..."
        setTimeout(() => {
            e.target.textContent = "Pridané do košíka"
            e.target.style.backgroundColor = "white";
            e.target.style.color = "green";
            e.target.style.border = "2px white solid";
            e.target.style.cursor = "default";
            e.target.disabled = true;
        }, 500);
    }

    let tlacidlo = "";
    if(props.klik){
        tlacidlo = <p className="nieco2">Pridané do košíka</p>
    }
    else{
        tlacidlo = <button className="nieco3"onClick={(e) => {
            handleClick(e);
            setTimeout(() => {
                props.updateKosik();
            }, 500);
    
        }}
        >{"Pridať do košíka"} </button> 
    
    }

    return(
        <div className='produkt-container'>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="produkt-nav">
                <ul>
                    <li><Link to="/" style={{ textDecoration: 'none' }}>Domov &nbsp;</Link></li>
                    <li>{">"}</li>
                    <li><Link to="/procesory" style={{ textDecoration: 'none' }}>&nbsp; Procesory &nbsp;</Link></li>
                </ul>
            </div>
            <h1>Intel core i9</h1>

            <div className="showcase">
                <img src={intelImg} className="intel-img"/>
                <ul>
                    <li><img src="./src/assets/intelcore.jpg" className="img" onClick={() => changeImg(1)}/></li>
                    <li><img src="./src/assets/intel9.jpg" className="img" onClick={() => changeImg(2)}/></li>
                    <li><img src="./src/assets/intel99.jpg" className="img" onClick={() => changeImg(3)}/></li>
                </ul>
            </div>
            <div className="nieco">
                <small>kompatibilný so základnými doskami založenými na<br/> čipovej sade Intel 700 Series a Intel 600 Series</small>
            </div>
            <p>procesor, Intel Core i9, socket Intel 1700, 2 Ghz, turbo 5,8 Ghz, 24x <br/> jadro, Raptor Lake Refresh (14.gen), 10 nm, 65 W, bez grafickej<br/> karty</p>
            <h2>✓ SKLADOM 4 ks</h2>
            <p className="cena-produkt">499.99€</p>
            <div className="produkt-tlacidlo">{tlacidlo}</div>
            <div className="medzera"/>
        </div>
    );
}

export default Produkt;