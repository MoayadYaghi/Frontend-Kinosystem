import React, { Component } from "react";

import { Link } from "react-router-dom";
import GeneratorAufruf from "../ZahlenGenerator/GeneratorAufruf";

class ShopÜbersicht extends Component {
  constructor(props) {
    super(props);
  }


  render() {
     const SnacksLink="/Shop/Snacks"
    const GetraenkLink="/Shop/Getraenk"
    const ProgrammLink="/programm"
    return <div>
//<GeneratorAufruf/>

<div className="TitleShopMitte">
        <div className="DESIGNHeadline2">
        Unser Shop
        </div></div>
        <div className="DESIGNBOX">
        <div className="DESIGNTextField">Für viele gehört das Popcorn oder die Nachos genauso zum Kino wie der eigentliche Film. Wäre da nur nicht immer diese lange Warteschlange, bei der es kaum vorangeht und man ewig warten muss bis man endlich an der Reihe ist. Nicht mit uns! <br/>
        Wir haben uns diesem Problem zugewendet und für Sie die Lösung gefunden. Mit einem Ticket, das Sie über unsere Webseite bestellen, haben Sie die Möglichkeit, Snacks und Getränke gleich mitzukaufen. Mit der Bestätigung, die Sie per Mail erhalten, können Sie die Express-Warteschlange nehmen und so viel schneller zu Ihren Snacks und Getränken kommen, weil niemand vor Ihnen in der Schlange steht, der viele Minuten die Cent Stücke einzeln zählt.   
         
    </div>
    <div className="LinksShopÜbersicht">
              <Link className="DESIGNButton" to={ProgrammLink}>
                Programm
              </Link>

              <Link className="DESIGNButton" to={SnacksLink}>
                Snacks
              </Link>

              <Link className="DESIGNButton" to={GetraenkLink}>
                Getränke
              </Link>
              
            </div></div>

    
    <br/>
    
    </div>;
  }
}
export default ShopÜbersicht;
