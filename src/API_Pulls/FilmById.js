import axios from "axios";
import LocalURL from '../constants';

class FilmById {
  filmById(filmId) {
    const Get_Film_API_URL =
      (LocalURL + "film/" + filmId);

    return axios.get(Get_Film_API_URL);
  }
}

export default new FilmById(); 