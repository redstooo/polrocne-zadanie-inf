import CardProcesory from "./CardProcesory";

function Procesory(props){

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
                    <h1>Filtre</h1>
                    <button className="cis">Vyčistiť filtre</button>
                    <div className="kat">
                        <h4>Kategórie</h4>
                        <p>AMD</p>
                        <p>Ryzen</p>
                    </div>

                    <h4 className="abc">Cena</h4>

                    <div className="ceny">
                        <p>€0.00 - €20</p>
                        <p>€20 - €50 </p>
                        <p>€50 - €100</p>
                        <p>€100 - €120</p>
                        <p>€120 - vyššie </p>
                    </div>
                    
                    <div className="farby">
                        <h4>Farba</h4>
                        <div className="cierna"></div>
                        <div className="cervena"></div>
                    </div>


                </div>

                <div className="produkty">
                    <CardProcesory id="a" pic="./procesor1.jpg" popisok="AMD Ryzen 5 5600" frekvencia="Frekvencia - 3,5 GHz (3,5 GHz)" podpora="Podporovaný typ pamäte -  DDR4" naSklade={true} hviezda="5" price0="90.99" price="86.99€" updateKosik={props.kosikClick} updateKosik2={props.kosikClick2}/>
                    <CardProcesory id="b" pic="./procesor2.jpg" popisok="AMD Ryzen 7 7700X" frekvencia="Frekvencia - 4,5 GHz (4,5 GHz)" podpora="Podporovaný typ pamäte - DDR5" naSklade={true} hviezda="5" price0="370.99" price="340.99€" updateKosik={props.kosikClick} updateKosik2={props.kosikClick2}/>
                    <CardProcesory id="c" pic="./procesor3.jpg" popisok="Intel Core i5-14600KF" frekvencia="Frekvencia - 3,5 GHz (3,5 GHz)" podpora="Podporovaný typ pamäte - DDR4/DDR5" naSklade={true} hviezda="5" price0="215.99" price="201.99€" updateKosik={props.kosikClick} updateKosik2={props.kosikClick2}/>
                    <CardProcesory id="d" pic="./procesor4.jpg" popisok="Intel Core i9-14900KF" frekvencia="Frekvencia - 3,2 GHz (3,2 GHz)" podpora="Podporovaný typ pamäte - DDR4/DDR5" naSklade={true} hviezda="5" price0="533.99" price="522.99€" updateKosik={props.kosikClick} updateKosik2={props.kosikClick2}/>
                </div>
            </div>
        </>
    );
}

export default Procesory;