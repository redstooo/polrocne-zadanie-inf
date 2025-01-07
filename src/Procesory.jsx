import React, { useState } from "react";
import CardProcesory from "./CardProcesory";
import { Link } from 'react-router-dom';

function Procesory(props){


    // radšej si zatvorte oči pán učiteľ

    const [sto, setSto] = useState(false)
    const [dvesto, setDvesto] = useState(false)
    const [tristo, setTristo] = useState(false)
    const [styristo, setStyristo] = useState(false)
    const [viac, setViac] = useState(false)
    const [amd, setAmd] = useState(false)
    const [intel, setIntel] = useState(false)

    const cisticka = () => {
        setSto(false)
        setDvesto(false)
        setTristo(false)
        setStyristo(false)
        setViac(false)
        setAmd(false)
        setIntel(false)
    }

    let produkty = ""
    if (sto){
        produkty = <div>
        <CardProcesory id="a" pic="./procesor1.jpg" popisok="AMD Ryzen 5 5600" frekvencia="Frekvencia - 3,5 GHz (3,5 GHz)" podpora="Podporovaný typ pamäte -  DDR4" naSklade={true} hviezda="5" price0="90.99€" price="86.99€" updateKosik={props.kosikClick} updateKosik2={props.kosikClick2}/>
        </div>
    }
    else if(dvesto){
        produkty = <div></div>
    }
    else if(tristo){
        produkty = <div>
            <CardProcesory id="c" pic="./procesor3.jpg" popisok="Intel Core i5-14600KF" frekvencia="Frekvencia - 3,5 GHz (3,5 GHz)" podpora="Podporovaný typ pamäte - DDR4/DDR5" naSklade={true} hviezda="5" price0="215.99€" price="201.99€" updateKosik={props.kosikClick} updateKosik2={props.kosikClick2}/>
        </div>
    }
    else if (styristo){
        produkty = <CardProcesory id="b" pic="./procesor2.jpg" popisok="AMD Ryzen 7 7700X" frekvencia="Frekvencia - 4,5 GHz (4,5 GHz)" podpora="Podporovaný typ pamäte - DDR5" naSklade={true} hviezda="5" price0="370.99€" price="340.99€" updateKosik={props.kosikClick} updateKosik2={props.kosikClick2}/>
    }
    else if(viac){
        produkty = <CardProcesory id="d" pic="./procesor4.jpg" popisok="Intel Core i9-14900KF" frekvencia="Frekvencia - 3,2 GHz (3,2 GHz)" podpora="Podporovaný typ pamäte - DDR4/DDR5" naSklade={true} hviezda="5" price0="533.99€" price="522.99€" updateKosik={props.kosikClick} updateKosik2={props.kosikClick2}/>
    }
    else if (amd){
        produkty = <div>
            <CardProcesory id="a" pic="./procesor1.jpg" popisok="AMD Ryzen 5 5600" frekvencia="Frekvencia - 3,5 GHz (3,5 GHz)" podpora="Podporovaný typ pamäte -  DDR4" naSklade={true} hviezda="5" price0="90.99€" price="86.99€" updateKosik={props.kosikClick} updateKosik2={props.kosikClick2}/>
            <CardProcesory id="b" pic="./procesor2.jpg" popisok="AMD Ryzen 7 7700X" frekvencia="Frekvencia - 4,5 GHz (4,5 GHz)" podpora="Podporovaný typ pamäte - DDR5" naSklade={true} hviezda="5" price0="370.99€" price="340.99€" updateKosik={props.kosikClick} updateKosik2={props.kosikClick2}/>
        </div>
    }
    else if (intel){
        produkty = <div>
            <CardProcesory id="c" pic="./procesor3.jpg" popisok="Intel Core i5-14600KF" frekvencia="Frekvencia - 3,5 GHz (3,5 GHz)" podpora="Podporovaný typ pamäte - DDR4/DDR5" naSklade={true} hviezda="5" price0="215.99€" price="201.99€" updateKosik={props.kosikClick} updateKosik2={props.kosikClick2}/>
            <CardProcesory id="d" pic="./procesor4.jpg" popisok="Intel Core i9-14900KF" frekvencia="Frekvencia - 3,2 GHz (3,2 GHz)" podpora="Podporovaný typ pamäte - DDR4/DDR5" naSklade={true} hviezda="5" price0="533.99€" price="522.99€" updateKosik={props.kosikClick} updateKosik2={props.kosikClick2}/>
        </div>
    }
    else{
        produkty = <div>
            <CardProcesory id="a" pic="./procesor1.jpg" popisok="AMD Ryzen 5 5600" frekvencia="Frekvencia - 3,5 GHz (3,5 GHz)" podpora="Podporovaný typ pamäte -  DDR4" naSklade={true} hviezda="5" price0="90.99€" price="86.99€" updateKosik={props.kosikClick} updateKosik2={props.kosikClick2}/>
            <CardProcesory id="b" pic="./procesor2.jpg" popisok="AMD Ryzen 7 7700X" frekvencia="Frekvencia - 4,5 GHz (4,5 GHz)" podpora="Podporovaný typ pamäte - DDR5" naSklade={true} hviezda="5" price0="370.99€" price="340.99€" updateKosik={props.kosikClick} updateKosik2={props.kosikClick2}/>
            <CardProcesory id="c" pic="./procesor3.jpg" popisok="Intel Core i5-14600KF" frekvencia="Frekvencia - 3,5 GHz (3,5 GHz)" podpora="Podporovaný typ pamäte - DDR4/DDR5" naSklade={true} hviezda="5" price0="215.99€" price="201.99€" updateKosik={props.kosikClick} updateKosik2={props.kosikClick2}/>
            <CardProcesory id="d" pic="./procesor4.jpg" popisok="Intel Core i9-14900KF" frekvencia="Frekvencia - 3,2 GHz (3,2 GHz)" podpora="Podporovaný typ pamäte - DDR4/DDR5" naSklade={true} hviezda="5" price0="533.99€" price="522.99€" updateKosik={props.kosikClick} updateKosik2={props.kosikClick2}/>
        </div>
    }

    






    return(
        <>
            <br />
            <br />
            <br />
            <br />
            <br />

            <img className="bgproc" src="./bgklavesnica.jpg"/>
            <h1 className="proce">Procesory</h1>

            <div className="mainpro">
                <div className="bgfilter">
                    <h1 className="filter">Filtre</h1>
                    <button className="cis" onClick={cisticka}>Vyčistiť filtre</button>
                    <div className="kat">
                        <h4>Kategórie</h4>
                        <p onClick={() => {
                            cisticka()
                            setAmd(!amd)}}>AMD</p>
                        <p onClick={() => {
                            cisticka()
                            setIntel(!intel)}}>Intel</p>
                    </div>

                    <h4 className="abc">Cena</h4>

                    <div className="ceny">
                        <p onClick={() => {
                            cisticka()
                            setSto(!sto)}
                            }>€0.00 - €100</p>
                        <p onClick={() => {
                            cisticka()
                            setDvesto(!dvesto)
                        }}>€101 - €200 </p>
                        <p onClick={() => {
                            cisticka()
                            setTristo(!tristo)
                        }}>€201 - €300</p>
                        <p onClick={() => {
                            cisticka()
                            setStyristo(!styristo)
                        }}>€301 - €400</p>
                        <p onClick={() => {
                            cisticka()
                            setViac(!viac)
                        }}>€401 - vyššie </p>
                    </div>
                    
                    <div className="farby">
                        <h4>Farba</h4>
                        <div className="cierna" onClick={() => {
                            cisticka()
                            setAmd(!amd)}}></div>
                        <div className="cervena" onClick={() => {
                            cisticka()
                            setIntel(!intel)}}></div>
                    </div>


                </div>

                <div className="produkty">
                    {produkty}
                </div>
            </div>
        </>
    );
}

export default Procesory;