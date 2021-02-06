import axios from "axios";
import LocalURL from "../constants";

class SaalByVorstellung {
  saalByVorstellung(vorstellungId) {
    const Get_Saal_By_VorstellungId =
      (LocalURL + "kinosaal/vorstellung/" + vorstellungId);

    return axios.get(Get_Saal_By_VorstellungId);
  }
}

export default new SaalByVorstellung(); 