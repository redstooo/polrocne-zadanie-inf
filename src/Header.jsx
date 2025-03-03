import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";

function Header(props){
    let more = "";
    if(props.kosik !== 0){
        more = props.kosik;
    }

    const [image, setImage] = useState("./poadie.jpg");

    const defpfp = () => {
        setImage("./def.jpg")
    }



    return(
        <header>
            <div className="navbar">
                <div className="navbar-content">

                    <div className="logo">
                        <Link to="/polrocne-zadanie-inf/"><img src="./logo.jpg" alt="Logo"/></Link>
                    </div>
        

                    <div className="menu">
                        <p><Link to="/polrocne-zadanie-inf/procesory" className="linky">Procesory</Link></p>
                        <p><Link to="/polrocne-zadanie-inf/ram" className="linky">RAM</Link></p>
                        <p><Link to="/polrocne-zadanie-inf/grafickeKarty" className="linky">Grafické Karty</Link></p>
                        <p><Link to="/polrocne-zadanie-inf/maticneDosky" className="linky">Matičné Dosky</Link></p>
                        <p><Link to="/polrocne-zadanie-inf/monitor" className="linky">Monitor</Link></p>
                        <p><Link to="/polrocne-zadanie-inf/klavesnice" className="linky">Klávesnice</Link></p>
                        <p><Link to="/polrocne-zadanie-inf/mysi" className="linky">Myši</Link></p>
                    </div>
        
                    <img id="kokos" src="./cart.jpg"/>
                    <p className="kosik-count">{more}</p>
                    <div className="ucet">
                        <img id="more" src={image}/>
                        <div className="dropdown-menu">
                            <ul>
                                <li onClick={defpfp}>Logout</li>
                            </ul>
                        </div>
                    </div>
        
                </div>
            </div>
        </header>
    );
}

export default Header