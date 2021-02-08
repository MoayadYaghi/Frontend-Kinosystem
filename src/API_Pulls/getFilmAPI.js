import axios from "axios";

const Slider_Rest_API_URL = "http://localhost:8081/film/all";

class getFilmAPI {
  getFilme() {
    return axios.get(Slider_Rest_API_URL);
  }
}

export default new getFilmAPI();
