

function Procesory(){

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
                        <p>RAM Kingston</p>
                        <p>RAM G.skill</p>
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

                    <h4 className="nieco9">Mená filtrov</h4>
                    <button className="filter">aplikované filtre (0)</button>
                </div>
            </div>
        </>
    );
}

export default Procesory;