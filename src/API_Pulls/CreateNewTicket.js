import axios from "axios";

class CreateNewTicket {
  createNewTicket(sitzId, vorstellungId, nutzerId) {
    const Post_Ticket_In_Warenkorb =
      ("http://localhost:8081/ticket/sitz/" + sitzId + "/vorstellung/" + vorstellungId + "/benutzer/" + nutzerId + "/gast/" + nutzerId);

      //k_59na12he
      //k_cju0xk83

    return axios.post(Post_Ticket_In_Warenkorb);
  }
}

export default new CreateNewTicket(); 