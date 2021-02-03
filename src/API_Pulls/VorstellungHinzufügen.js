import axios from "axios";

class VorstellungHinzufügenAPI {
  vorstellungHinzufügenAPI() {
    const fügeVorstellungHinzu =
      ("http://localhost:8081/vorstellung/vorstellung");

    return axios.get(fügeVorstellungHinzu);
  }
}

export default new VorstellungHinzufügenAPI(); 