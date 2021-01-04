import axios from "axios";

class FilmSucheAPI {
  getFilmSucheAPI(FilmTitle) {
    const Slider_Suche_API_URL =
      "https://imdb-api.com/en/API/SearchMovie/k_59na12he/" + FilmTitle;

    return axios.get(Slider_Suche_API_URL);
  }
}

export default new FilmSucheAPI();
