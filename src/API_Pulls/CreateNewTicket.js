import axios from "axios";

class CreateNewTicket {
  createNewTicket(sitzId, vorstellungId) {
    var Authorization = sessionStorage.getItem('token')
    console.log(Authorization)
    var VorstellID = parseInt(vorstellungId)
    console.log(VorstellID)
    const Post_Ticket_In_Warenkorb =
      ("http://localhost:8081/ticket/sitz/" + sitzId + "/vorstellung/" + VorstellID);

      //k_59na12he
      //k_cju0xk83

    return axios.post(("http://localhost:8081/ticket/sitz/" + sitzId + "/vorstellung/" + VorstellID), null,{headers:{
      Authorization
    }});
  }
}

export default new CreateNewTicket(); 