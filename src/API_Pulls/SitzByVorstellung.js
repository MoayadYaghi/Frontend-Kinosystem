import axios from "axios";

class sitzeByVorstellung {
  sitzeByVorstellung(vorstellungId) {
    const Get_Sitze_By_Vorstellung =
      ("http://localhost:8081/vorstellung/sitze/" + vorstellungId);

    return axios.get(Get_Sitze_By_Vorstellung);
  }
}

export default new sitzeByVorstellung(); 