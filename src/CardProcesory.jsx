
import React, { useState, useEffect } from "react";
function CardProcesory(props){

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


    const sklad = props.naSklade ? <div><small className="fajka">✔</small><small className="fajka-text"> skladom</small></div> : <div><small className="krizik">✖</small><small className="krizik-text"> nie je skladom</small></div>;

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

        let tlacidlo = "";
        if(props.naSklade){
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
                tlacidlo = <><button className="košík-button2"onClick={() => {
                    handleClick();
                    setTimeout(() => {
                        props.updateKosik(true);
                        props.updateKosik2(true);
                        
                    }, 500);
        
                }}
                >{"Pridať do košíka"} </button> 
                <img className="kosik-ikona" src="./kosik-ikona.jpg" width="30px"/>
                </>
            }
    
    
        }
        else{
            tlacidlo = <button className="košík-button-false">{"Vypredané"} </button> 
        }
        
    return(
        <div className="produktpro">
            <p className="sklad">{sklad}</p>
            <img className="produktpropic" src={props.pic} width="220px"/>
            <p className="hviezdy">{hviezda}</p>
            
            <div className="ceny2">
                <h4><s>{props.price0}</s></h4>
                <h3>{props.price}</h3>
            </div>
            <div className="tlacidlo2">{tlacidlo}</div>
            <p className="produkt-popisok">{props.popisok}</p>
            <div className="popiskypro">
                <p>{props.frekvencia}</p>
                <p className="pozadiepodpora">{props.podpora}</p>
            </div>
        </div>
    )
}


export default CardProcesory;