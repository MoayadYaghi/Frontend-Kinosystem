import axios from "axios";

class NewFilmAPI {
  getnewFilmAPI(FilmID) {
    const Slider_Suche_API_URL =
      "https://imdb-api.com/de/API/Title/k_59na12he/" + FilmID;

    //k_59na12he
    //k_cju0xk83

    return axios.get(Slider_Suche_API_URL);
  }
}

export default new NewFilmAPI();
