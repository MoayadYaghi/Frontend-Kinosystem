import axios from "axios";

const FilmInfo_Rest_API_URL = "http://localhost:8081 ...";

class Filminfo {
  getFilm() {
    return axios.get(FilmInfo_Rest_API_URL);
  }
}

export default new Filminfo();
