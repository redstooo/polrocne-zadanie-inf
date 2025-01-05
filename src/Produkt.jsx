import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import Card from './Card';


function Produkt(props){
    
    const [intelImg, setIntelImg] = useState("./intelcore.jpg")

    const changeImg = (cislo) => {
        if(cislo === 1){
            setIntelImg("./intelcore.jpg")
        }
        else if (cislo === 2){
            setIntelImg("./intel9.jpg")
        }
        else if(cislo === 3){
            setIntelImg("./intel99.jpg")
        }
    }

    const [pridane, setPridane] = useState(() => {
        const data = localStorage.getItem("PRODUKT");
        return data !== null ? JSON.parse(data) : false;
    });
    
    useEffect(() =>{
        localStorage.setItem("1", JSON.stringify(pridane));
    }, [pridane])

    const handleClick = () => {
        setTimeout(() => {
            setPridane(!pridane)
        }, 500);
    }

    let tlacidlo = "";
    if(pridane){
        tlacidlo = <button className="košík-button-pridané"onClick={() => {
            handleClick();
            setTimeout(() => {
                props.updateKosik(false);
                props.updateKosik2(false);
                
            }, 500);

        }}
        >{"Pridané do košíka"} </button> 
    }
    else{
        tlacidlo = <button className="košík-button"onClick={() => {
            handleClick();
            setTimeout(() => {
                props.updateKosik(true);
                props.updateKosik2(true);
                
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
                    <li><Link to="/polrocne-zadanie-inf/" style={{ textDecoration: 'none' }}>Domov &nbsp;</Link></li>
                    <li>{">"}</li>
                    <li><Link to="/polrocne-zadanie-inf/procesory" style={{ textDecoration: 'none' }}>&nbsp; Procesory &nbsp;</Link></li>
                </ul>
            </div>
            <h1>Intel core i9</h1>

            <div className="showcase">
                <img src={intelImg} className="intel-img"/>
                <ul>
                    <li><img src="./intelcore.jpg" className="img" onClick={() => changeImg(1)}/></li>
                    <li><img src="./intel9.jpg" className="img" onClick={() => changeImg(2)}/></li>
                    <li><img src="./intel99.jpg" className="img" onClick={() => changeImg(3)}/></li>
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