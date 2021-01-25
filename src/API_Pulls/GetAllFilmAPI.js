import axios from "axios";

class GetAllFilmAPI {
  getAllFilmAPI() {
    const Get_All_Film_API_URL =
      ("http://localhost:8081/film/all");

    return axios.get(Get_All_Film_API_URL);
  }
}

export default new GetAllFilmAPI(); 