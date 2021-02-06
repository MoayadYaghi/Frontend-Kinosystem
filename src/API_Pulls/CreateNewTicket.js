import axios from "axios";
import LocalURL from '../constants';

class CreateNewTicket {
  createNewTicket(sitzId, vorstellungId, nutzerId) {
    var Authorization = sessionStorage.getItem('token')
    const Post_Ticket_In_Warenkorb =
      (LocalURL + "ticket/sitz/" + sitzId + "/vorstellung/" + vorstellungId + "/benutzer/" + nutzerId + "/gast/" + nutzerId);

      //k_59na12he
      //k_cju0xk83

    return axios.post(Post_Ticket_In_Warenkorb);
  }
}

export default new CreateNewTicket(); 