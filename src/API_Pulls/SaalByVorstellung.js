import axios from "axios";
import LocalURL from "../constants";

class SaalByVorstellung {
  saalByVorstellung(vorstellungId) {
    const Get_Saal_By_VorstellungId =
      // ("http://localhost:8081/kinosaal/vorstellung/" + vorstellungId);

      LocalURL + "kinosaal/vorstellung/" + vorstellungId;

    return axios.get(Get_Saal_By_VorstellungId);
  }
}

export default new SaalByVorstellung();
