import React, { Component } from "react";

import { Link } from "react-router-dom";


class Test1 extends Component {




  render(){

  
    var Text = localStorage.getItem('Text1')

  

    return(
        <div>
            Sieh haben folgende Daten Eingegeben: <br/>
            {Text}
                <br/>
            <Link  to="/test1">
          Zurück zur Eingabe
        </Link>
        
            </div>
    )
  }
}
export default Test1;