import axios from "axios";
import LocalURL from '../constants';

const Slider_Rest_API_URL =
  LocalURL + "film/all";

class getFilmAPI {
  getFilme() {
    return axios.get(Slider_Rest_API_URL);
  }
}

export default new getFilmAPI();
