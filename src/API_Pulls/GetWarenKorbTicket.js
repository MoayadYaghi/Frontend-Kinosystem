import axios from "axios";

class GetWarenKorbTicket {
  getWarenKorbTicketID(sitz, vorstellungID) {
    var Authorization = sessionStorage.getItem("token");
    const Get_Film_API_URL =
      "http://localhost:8081/ticket/sitz/" +
      sitz +
      "/vorstellung/" +
      vorstellungID;

    return axios.get(Get_Film_API_URL, {
      headers: {
        Authorization,
      },
    });
  }
}

export default new GetWarenKorbTicket();
