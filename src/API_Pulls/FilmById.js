import axios from "axios";

class FilmById {
  filmById(filmId) {
    const Get_Film_API_URL =
      ("http://localhost:8081/film/" + filmId);

    return axios.get(Get_Film_API_URL);
  }
}

export default new FilmById(); 