import axios from "axios";
import LocalURL from "../constants";

class GetProfilübersicht {
  getProfil() {
    var Authorization = sessionStorage.getItem("token");
    const Get_Film_API_URL = LocalURL + "benutzer";
    return axios.get(Get_Film_API_URL, {
      headers: {
        Authorization,
      },
    });
  }
}

export default new GetProfilübersicht();
