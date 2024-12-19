import { Link } from 'react-router-dom';
import React, { useState } from "react";

function Header(props){
    let more = "";
    if(props.kosik !== 0){
        more = props.kosik;
    }

    const [image, setImage] = useState("./src/assets/poadie.jpg");

    const defpfp = () => {
        setImage("./src/assets/def.jpg")
    }



    return(
        <header>
            <div class="navbar">
                <div class="navbar-content">

                    <div class="logo">
                        <Link to="/"><img src="./src/assets/logo.jpg" alt="Logo"/></Link>
                    </div>
        

                    <div class="menu">
                        <p><Link to="/procesory" className="linky">Procesory</Link></p>
                        <p><Link to="/ram" className="linky">RAM</Link></p>
                        <p><Link to="/grafickeKarty" className="linky">Grafické Karty</Link></p>
                        <p><Link to="/maticneDosky" className="linky">Matičné Dosky</Link></p>
                        <p><Link to="/monitor" className="linky">Monitor</Link></p>
                        <p><Link to="/klavesnice" className="linky">Klávesnice</Link></p>
                        <p><Link to="/mysi" className="linky">Myši</Link></p>
                    </div>
        
                    <img id="kokos" src="./src/assets/cart.jpg"/>
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