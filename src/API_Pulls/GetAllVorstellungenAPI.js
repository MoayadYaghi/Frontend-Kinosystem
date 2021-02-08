import axios from "axios";
import LocalURL from '../constants';

class GetAllVorstellungenAPI {
  getAllVorstellungenAPI() {
    const Get_All_Vorstellungen_API_URL =
      (LocalURL + "vorstellung");

    return axios.get(Get_All_Vorstellungen_API_URL);
  }
}

export default new GetAllVorstellungenAPI();
