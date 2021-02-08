import axios from "axios";
import LocalURL from "../constants";

class UpdateBenutzer {
  updateProfil(data) {
    var Authorization = sessionStorage.getItem("token");
    const Get_Film_API_URL = LocalURL + "benutzer/update";
    return axios.post(Get_Film_API_URL, data, {
      headers: {
        Authorization,
      },
    });
  }
}

export default new UpdateBenutzer();
