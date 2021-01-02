import React, { Component } from 'react';
import Style from './Smoroll.css';

class Menue2 extends Component	{
        state = {};
        render(){
            return( 

                <div className = "Informationen" id="menue2">
                
                <div className="Inf-Box">
                    Eintrittspreise
                    </div>
                    <div className ="TextS">
                    Die Eintrittspreise für reguläre Filmvorstellungen stellen sich wie folgt zusammen:
                    <div>
                        Alle Preise sind in Euro angegeben
                    </div>

                    <table className = "table table-striped" >
                        <thead>
                            <tr>

                                <td></td>
                                <td>Verkauf im Kino</td>
                                <td>Verkauf Online</td>
                            </tr>
                        </thead>
                        <tbody>
                           
                                    <tr> Aktuelle Blockbuster
                                    <td> </td>
                                    <td> </td>
                                    </tr>

                        </tbody>
                        <tbody>   
                                    <tr> Mo-Fr
                                    <td> </td>
                                    <td> </td>
                                    </tr>
                        </tbody>
                        <tbody>
                                    <tr> Regulär
                                        <td> 8.00</td>
                                        <td> 7.50</td>                   
                                    </tr>
                        </tbody>
                        <tbody>
                                    <tr> Kind
                                        <td> 7.00</td>
                                        <td> 6.00</td>                   
                                    </tr>
                        </tbody>
                        <tbody>
                                    <tr> Schüler/Student
                                        <td> 6.00</td>
                                        <td> 4.00</td>                   
                                    </tr>
                        </tbody>
                        <tbody>
                                    <tr> Rüstige Rentner
                                        <td> 7.00</td>
                                        <td> 6.00</td>                   
                                    </tr>
                        </tbody>
                        <tbody>
                                    <tr> Familienticket
                                        <td> 22.00</td>
                                        <td> 20.00</td>                   
                                    </tr>
                        </tbody>
                        <tbody>   
                                    <tr> Sa + So
                                    <td> </td>
                                    <td> </td>
                                    </tr>
                        </tbody>
                        <tbody>
                                    <tr> Regulär
                                        <td> 9.00</td>
                                        <td> 8.00</td>                   
                                    </tr>
                        </tbody>
                        <tbody>
                                    <tr> Kind
                                        <td> 8.00</td>
                                        <td> 7.00</td>                   
                                    </tr>
                        </tbody>
                        <tbody>
                                    <tr> Schüler/Student
                                        <td> 7.00</td>
                                        <td> 5.00</td>                   
                                    </tr>
                        </tbody>
                        <tbody>
                                    <tr> Rüstige Rentner
                                        <td> 8.00</td>
                                        <td> 7.00</td>                    
                                    </tr>
                        </tbody>
                        <tbody>
                                    <tr> Familienticket
                                        <td> 24.00</td>
                                        <td> 22.00</td>                   
                                    </tr>
                        </tbody>

                        Für Klassik-Vorstellungen werden für jedes Ticket 3 Euro Rabatt gewährt. <br/>
                        Das  Familienticket erhält 10 Euro Rabatt!
            
                    </table>
                    <div>

                        Informationen für Rollstuhlfahrer: <br/>
                        Alle Kinos sind ausgestattet mit extra Plätzen für Rollstuhlfahrer. Sollen Sie einen solchen benötigen, bitte wählen sie einen solchen in der Reservierung Ihrer Sitze aus. Sollten Sie zu diesem Thema Fragen haben, kontaktieren sie uns gerne unter folgenden Kontaktdaten: <br/>
                        Telefonnummer: 01754 0542621 <br/>
                        E-Mail: Informationen-B@KG42.de


                    </div>


                </div></div>
                    
            )}
}
export default Menue2