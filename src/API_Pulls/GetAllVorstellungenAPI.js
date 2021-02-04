import axios from "axios";

class GetAllVorstellungenAPI {
  getAllVorstellungenAPI() {
    const Get_All_Vorstellungen_API_URL =
      ("http://localhost:8081/vorstellung");

    return axios.get(Get_All_Vorstellungen_API_URL);
  }
}

export default new GetAllVorstellungenAPI(); 