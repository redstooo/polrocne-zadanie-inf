
function Footer(){

    return(
        <footer>
            <div className="top-bar">
                <p id="kokos">Po-Pi: 9:00 - 17:30</p>
                <p id="kokor">Zavolaj nám: +421 789 123 456</p>
        
                <a href="https://www.facebook.com/sgcr.kosice?locale=sk_SK" target="_blank"><img id="fb" src="./facebook.jpg"/></a>
                <a href="https://www.instagram.com/gymnaziumkatkinpark/" target="_blank"><img id="ig" src="./instagram.jpg"/></a>
                <hr className="medzerahrr"/>
            </div>
            <div className="footer">
                <h2>Prihlás sa tu ---&gt;</h2>
                <small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Buď prvý kto sa dozvie o výhodných <br/> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ponukách a zľavách.</small>
                <input className="email-input" type="email" placeholder="Tvoj Email" />
                <button className="button-predplatne">Predplatné</button>
                <h4 className="informacie-text">Informácie</h4>
                <small className="carrat">⌄</small>
                <hr />
                <h4 className="PC">PC produkty</h4>
                <small className="carrat carrat-upper" >˄</small>
                <ul className="ulmore">
                    <li>Procesory</li>
                    <li>RAM</li>
                    <li>Grafické karty</li>
                    <li>Matičné dosky</li>
                    <li>Monitory</li>
                    <li>Klávesnice</li>
                    <li>Myši</li>
                </ul>
                <hr className="medzerahr"/>
                <h4 className="pockom">Počítačové komponenty</h4>
                <small className="carrat">⌄</small>
                <hr />
                <br />
                <br />
                <br />
                <hr />
                <br />
                <h4 className="pockom">Adresa</h4>
                <hr />
                <img src="./karty.jpg"/>
            </div>

        </footer>
    );
}

export default Footer