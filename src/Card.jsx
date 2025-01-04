import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";

function Card(props){

    const kluc = props.id

    const [pridane, setPridane] = useState(() => {
        const data = localStorage.getItem(kluc);
        return data !== null ? JSON.parse(data) : false;
    });


    useEffect(() =>{
        localStorage.setItem(kluc, JSON.stringify(pridane));
    }, [pridane])

    const handleClick = () => {
        setTimeout(() => {
            setPridane(!pridane);
        }, 500);
    }


        let hviezda = "";
        if(props.hviezda === "5"){
            hviezda = <div><h2 className="hviezda">★★★★★</h2><h2 className="tmava-hviezda"></h2></div>
        }
        else if(props.hviezda === "4"){
            hviezda = <div><h2 className="hviezda">★★★★</h2><h2 className="tmava-hviezda">★</h2></div>
        }
        else if(props.hviezda === "3"){
            hviezda = <div><h2 className="hviezda">★★★</h2><h2 className="tmava-hviezda">★★</h2></div>
        }
        else if(props.hviezda === "2"){
            hviezda = <div><h2 className="hviezda">★★</h2><h2 className="tmava-hviezda">★★★</h2></div>
        }
        else if(props.hviezda === "1"){
            hviezda = <div><h2 className="hviezda">★</h2><h2 className="tmava-hviezda">★★★★</h2></div>
        }

    const sklad = props.naSklade ? <div><small className="fajka">✔</small><small className="fajka-text"> skladom</small></div> : <div><small className="krizik">✖</small><small className="krizik-text"> nie je skladom</small></div>;
    

    let tlacidlo = "";
    if(props.naSklade){
        if(pridane){
            tlacidlo = <button className="košík-button-pridané"onClick={() => {
                handleClick();
                setTimeout(() => {
                    if(props.pic == "./intelcore.jpg"){
                        props.updateKosik(false);
                        props.updateKosik2(false);
                    }
                    else{
                        props.updateKosik(false);
                    }
                }, 500);
    
            }}
            >{"Pridané do košíka"} </button> 
        }
        else{
            tlacidlo = <button className="košík-button"onClick={() => {
                handleClick();
                setTimeout(() => {
                    if(props.pic == "./intelcore.jpg"){
                        props.updateKosik(true);
                        props.updateKosik2(true);
                    }
                    else{
                        props.updateKosik(true);
                    }
                }, 500);
    
            }}
            >{"Pridať do košíka"} </button> 
        }


    }
    else{
        tlacidlo = <button className="košík-button-false">{"Vypredané"} </button> 
    }


    return(
        <div className="card">
            <p>{sklad}</p>
            <div>{props.pic == "./intelcore.jpg" ? <Link to="/polrocne-zadanie-inf/produktshowcase"><img className="card-img" src={props.pic} alt="product picture" width="200px"/></Link> : <img className="card-img" src={props.pic} alt="product picture" width="200px"/>}</div>
            <br />
            <p>{hviezda}</p>
            <p className="card-title">{props.text}</p>
            <h4><s>{props.price0}</s></h4>
            <h3>{props.price}</h3>
            <div>{tlacidlo}</div>
        </div>
    );
}

export default Card