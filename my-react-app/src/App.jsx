import React, { useState } from "react";
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
  const [kosikPocet, setKosikPocet] = useState(0);
  const [produktSet, setProduktSet] = useState(false);

  const kosikClick = () => {
    setKosikPocet(kosikPocet + 1);
    setProduktSet(true);
  };




  return (
    <>
      <Header kosik={kosikPocet} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <br />
              <br />
              <br />
              <br />
              <br />
              <BlackFriday />
              <Card pic="./src/assets/intelcore.jpg" text="Intel core i9" price0="539.99€" price="499.99€" hviezda="1" naSklade={true} updateKosik={kosikClick}/>
              <Card pic="./src/assets/ram.jpg" text="Kingston DDR4 FURY Beast RGB" price0="439.99€" price="399.99€" hviezda="2" naSklade={false} updateKosik={kosikClick}/>
              <Card pic="./src/assets/grafika.jpg" text="GIGABYTE GeForce RTX 3050" price0="720.99€" price="699.99€" hviezda="3" naSklade={true} updateKosik={kosikClick}/>
              <Card pic="./src/assets/monitor.jpg" text="MSI B450 GAMING PLUS MAX" price0="720.99€" price="699.99€" hviezda="4" naSklade={true} updateKosik={kosikClick}/> 
              <Card pic="./src/assets/intelcore.jpg" text="Intel core i9" price0="539.99€" price="499.99€" hviezda="1" naSklade={true} updateKosik={kosikClick} />
              <Card pic="./src/assets/ram.jpg" text="Kingston DDR4 FURY Beast RGB" price0="439.99€" price="399.99€" hviezda="2" naSklade={false} updateKosik={kosikClick} />
              <Card pic="./src/assets/grafika.jpg" text="GIGABYTE GeForce RTX 3050" price0="720.99€" price="699.99€" hviezda="3" naSklade={true} updateKosik={kosikClick} />
              <Card pic="./src/assets/monitor.jpg" text="MSI B450 GAMING PLUS MAX" price0="720.99€" price="699.99€" hviezda="4" naSklade={true} updateKosik={kosikClick} />
              <Card pic="./src/assets/maticna.jpg" text="Samsung Odyssey G55C" price0="439.99€" price="399.99€" hviezda="5" naSklade={false} updateKosik={kosikClick} />
              <Card pic="./src/assets/jednorucna_klavesnica.jpg" text="Jednoručná herná klávesnica" price0="439.99€" price="399.99€" hviezda="5" naSklade={true} updateKosik={kosikClick} />
              <Card pic="./src/assets/mys.jpg" text="YENKEE YMS myš herná WL" price0="439.99€" price="399.99€" hviezda="5" naSklade={true} updateKosik={kosikClick} />
              <Card pic="./src/assets/intel2.jpg" text="Intel core i9" price0="439.99€" price="399.99€" hviezda="2" naSklade={true} updateKosik={kosikClick} />
              <Card pic="./src/assets/monitor2.jpg" text="Samsung Odyssey G55C" price0="439.99€" price="399.99€" hviezda="1" naSklade={true} updateKosik={kosikClick} />
              <Card pic="./src/assets/mys2.jpg" text="Logitech G502 Hero K/DA edícia Herná myš" price0="179.99€" price="159.90€" hviezda="5" naSklade={true} updateKosik={kosikClick} />
              <Card pic="./src/assets/klavesnica2.jpg" text="Dark Project One 87" price0="79.99€" price="59.99€" hviezda="4" naSklade={true} updateKosik={kosikClick} />
              <Card pic="./src/assets/maticna2.jpg" text="MSI B450 GAMING PLUS MAX" price0="59.99€" price="39.99€" hviezda="3" naSklade={true} updateKosik={kosikClick} />
              <Sponzori />
            </>
          }
        />

        <Route path="/procesory" element={<Procesory />} />
        <Route path="/ram" element={<Ostatne />} />
        <Route path="/grafickeKarty" element={<Ostatne />} />
        <Route path="/maticneDosky" element={<Ostatne />} />
        <Route path="/monitor" element={<Ostatne />} />
        <Route path="/klavesnice" element={<Ostatne />} />
        <Route path="/mysi" element={<Ostatne />} />
        <Route path="/produktshowcase" element={<Produkt klik={produktSet} updateKosik={kosikClick}/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
