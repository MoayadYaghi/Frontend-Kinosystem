import axios from "axios";

class VorstellungByFilm {
  vorstellungByFilm(filmId) {
    const Get_Vorstellung_By_FilmId =
      ("http://localhost:8081/vorstellung/film/" + filmId);

    return axios.get(Get_Vorstellung_By_FilmId);
  }
}

export default new VorstellungByFilm(); 