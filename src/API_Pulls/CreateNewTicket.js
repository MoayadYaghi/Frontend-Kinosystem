import axios from "axios";

class CreateNewTicket {
  createNewTicket(sitzId, vorstellungId) {
    var Authorization = sessionStorage.getItem('token')
    //console.log(Authorization)
    const Post_Ticket_In_Warenkorb =
      ("http://localhost:8081/ticket/sitz/" + sitzId + "/vorstellung/" + vorstellungId);

      //k_59na12he
      //k_cju0xk83

    return axios.post(Post_Ticket_In_Warenkorb, null,{header:{
      Authorization
    }} );
  }
}

export default new CreateNewTicket(); 