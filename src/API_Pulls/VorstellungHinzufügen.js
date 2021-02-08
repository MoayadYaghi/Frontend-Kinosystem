import axios from "axios";
import LocalURL from '../constants';

class VorstellungHinzufügenAPI {
  vorstellungHinzufügenAPI() {
    const fügeVorstellungHinzu =
      (LocalURL + "vorstellung/vorstellung");

    return axios.get(fügeVorstellungHinzu);
  }
}

export default new VorstellungHinzufügenAPI();
