import axios from "axios";
import LocalURL from '../constants';

class CreateNewTicket {
  createNewTicket(sitzId, vorstellungId) {
    var Authorization = sessionStorage.getItem('token')
    console.log(Authorization)
    var VorstellID = parseInt(vorstellungId)
    console.log(VorstellID)
    const Post_Ticket_In_Warenkorb =

     // ("http://localhost:8081/ticket/sitz/" + sitzId + "/vorstellung/" + VorstellID);
     (LocalURL + "ticket/sitz/" + sitzId + "/vorstellung/" + vorstellungId );
    //"/benutzer/" + nutzerId + "/gast/" + nutzerId

      //k_59na12he
      //k_cju0xk83

    return axios.post((Post_Ticket_In_Warenkorb, null,{headers:{
      Authorization
    }});
  }
}

export default new CreateNewTicket(); 