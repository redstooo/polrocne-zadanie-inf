import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import BlackFriday from "./BlackFriday.jsx";
import Sponzori from "./Sponzori.jsx";
import Procesory from "./Procesory.jsx";
import Ostatne from "./Ostatne.jsx";
import Produkt from "./Produkt.jsx";

function App() {
  const [kosikPocet, setKosikPocet] = useState(() => {
    const data = localStorage.getItem("KOSIK");
    return data !== null ? JSON.parse(data) : 0;
  });
      
  useEffect(() =>{
    localStorage.setItem("KOSIK", JSON.stringify(kosikPocet));
  }, [kosikPocet])

  const kosikClick = (pridat) => {
    if(pridat){
      setKosikPocet(kosikPocet + 1);
    }
    else{
      setKosikPocet(kosikPocet + -1);
    }

  };


  const [produktSet, setProduktSet] = useState(() => {
    const dataProdukt = localStorage.getItem("PRODUKT");
    return dataProdukt !== null ? JSON.parse(dataProdukt) : false;
  });


  useEffect(() =>{
    localStorage.setItem("PRODUKT", JSON.stringify(produktSet));
  }, [produktSet])

  const kosikClick2 = (pridat) => setProduktSet(pridat)


  return (
    <>
      <Header kosik={kosikPocet} />
      <Routes>
        <Route
          path="/polrocne-zadanie-inf"
          element={
            <>
              <br />
              <br />
              <br />
              <br />
              <br />
              <BlackFriday />

              // radšej si zatvorte oči pán učiteľ
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <div className="nieco999">
                <Card id="1" pic="./intelcore.jpg" text="Intel core i9" price0="539.99€" price="499.99€" hviezda="1" naSklade={true} updateKosik={kosikClick} updateKosik2={kosikClick2}/>
                <Card id="2" pic="./ram.jpg" text="Kingston DDR4 FURY Beast RGB" price0="439.99€" price="399.99€" hviezda="2" naSklade={false} updateKosik={kosikClick} updateKosik2={kosikClick2}/>
                <Card id="3" pic="./grafika.jpg" text="GIGABYTE GeForce RTX 3050" price0="720.99€" price="699.99€" hviezda="3" naSklade={true} updateKosik={kosikClick} updateKosik2={kosikClick2}/>
                <Card id="4" pic="./monitor.jpg" text="MSI B450 GAMING PLUS MAX" price0="720.99€" price="699.99€" hviezda="4" naSklade={true} updateKosik={kosikClick} updateKosik2={kosikClick2}/> 
                <Card id="5" pic="./maticna.jpg" text="Samsung Odyssey G55C" price0="439.99€" price="399.99€" hviezda="5" naSklade={false} updateKosik={kosikClick} updateKosik2={kosikClick2}/>
                <Card id="6" pic="./jednorucna_klavesnica.jpg" text="Jednoručná herná klávesnica" price0="439.99€" price="399.99€" hviezda="5" naSklade={true} updateKosik={kosikClick} updateKosik2={kosikClick2}/>
                <Card id="7" pic="./mys.jpg" text="YENKEE YMS myš herná WL" price0="439.99€" price="399.99€" hviezda="5" naSklade={true} updateKosik={kosikClick} updateKosik2={kosikClick2}/>
                <Card id="8" pic="./intel2.jpg" text="Intel core i9" price0="439.99€" price="399.99€" hviezda="2" naSklade={true} updateKosik={kosikClick} updateKosik2={kosikClick2}/>
                <Card id="9" pic="./monitor2.jpg" text="Samsung Odyssey G55C" price0="439.99€" price="399.99€" hviezda="1" naSklade={true} updateKosik={kosikClick} updateKosik2={kosikClick2}/>
                <Card id="10" pic="./mys2.jpg" text="Logitech G502 Hero K/DA edícia Herná myš" price0="179.99€" price="159.90€" hviezda="5" naSklade={true} updateKosik={kosikClick} updateKosik2={kosikClick2}/>
                <Card id="11" pic="./klavesnica2.jpg" text="Dark Project One 87" price0="79.99€" price="59.99€" hviezda="4" naSklade={true} updateKosik={kosikClick} updateKosik2={kosikClick2}/>
                <Card id="12" pic="./maticna2.jpg" text="MSI B450 GAMING PLUS MAX" price0="59.99€" price="39.99€" hviezda="3" naSklade={true} updateKosik={kosikClick} updateKosik2={kosikClick2}/>
                <hr />
                <Sponzori />
              </div>
            </>
          }
        />

        <Route path="/polrocne-zadanie-inf/procesory" element={<Procesory kosikClick={kosikClick} kosikClick2={kosikClick2}/>} />
        <Route path="/polrocne-zadanie-inf/ram" element={<Ostatne />} />
        <Route path="/polrocne-zadanie-inf/grafickeKarty" element={<Ostatne />} />
        <Route path="/polrocne-zadanie-inf/maticneDosky" element={<Ostatne />} />
        <Route path="/polrocne-zadanie-inf/monitor" element={<Ostatne />} />
        <Route path="/polrocne-zadanie-inf/klavesnice" element={<Ostatne />} />
        <Route path="/polrocne-zadanie-inf/mysi" element={<Ostatne />} />
        <Route path="/polrocne-zadanie-inf/produktshowcase" element={<Produkt updateKosik={kosikClick} updateKosik2={kosikClick2}/>} />
      </Routes>
      <Footer />
      <p>Radko Aproved since 7th January 2:02:20AM 2025</p>
    </>
  );
}

export default App;
