import axios from "axios";
import LocalURL from "../constants";

class sitzeByVorstellung {
  sitzeByVorstellung(vorstellungId) {
    const Get_Sitze_By_Vorstellung =
      // ("http://localhost:8081/sitz/vorstellung/" + vorstellungId);

      LocalURL + "sitze/vorstellung/" + vorstellungId;

    return axios.get(Get_Sitze_By_Vorstellung);
  }
}

export default new sitzeByVorstellung();
