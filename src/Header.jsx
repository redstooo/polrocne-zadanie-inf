import { Link } from 'react-router-dom';
import React, { useState } from "react";

function Header(props){
    let more = "";
    if(props.kosik !== 0){
        more = props.kosik;
    }

    const [image, setImage] = useState("/public/poadie.jpg");

    const defpfp = () => {
        setImage("/public/def.jpg")
    }



    return(
        <header>
            <div class="navbar">
                <div class="navbar-content">

                    <div class="logo">
                        <Link to="/"><img src="/public/logo.jpg" alt="Logo"/></Link>
                    </div>
        

                    <div class="menu">
                        <p><Link to="/polrocne-zadanie-inf/procesory" className="linky">Procesory</Link></p>
                        <p><Link to="/polrocne-zadanie-inf/ram" className="linky">RAM</Link></p>
                        <p><Link to="/polrocne-zadanie-inf/grafickeKarty" className="linky">Grafické Karty</Link></p>
                        <p><Link to="/polrocne-zadanie-inf/maticneDosky" className="linky">Matičné Dosky</Link></p>
                        <p><Link to="/polrocne-zadanie-inf/monitor" className="linky">Monitor</Link></p>
                        <p><Link to="/polrocne-zadanie-inf/klavesnice" className="linky">Klávesnice</Link></p>
                        <p><Link to="/polrocne-zadanie-inf/mysi" className="linky">Myši</Link></p>
                    </div>
        
                    <img id="kokos" src="/public/cart.jpg"/>
                    <p className="kosik-count">{more}</p>
                    <div class="ucet">
                        <img id="more" src={image}/>
                        <div class="dropdown-menu">
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