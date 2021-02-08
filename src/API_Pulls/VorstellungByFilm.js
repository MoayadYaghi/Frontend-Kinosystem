import axios from "axios";
import LocalURL from "../constants";

class VorstellungByFilm {
  vorstellungByFilm(filmId) {
    const Get_Vorstellung_By_FilmId = LocalURL + "vorstellung/film/" + filmId;

    return axios.get(Get_Vorstellung_By_FilmId);
  }
}

export default new VorstellungByFilm();
