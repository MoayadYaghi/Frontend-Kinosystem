import axios from "axios";
import LocalURL from "../constants";

class GetAllFilmAPI {
  getAllFilmAPI() {
    const Get_All_Film_API_URL = LocalURL + "film/all";

    return axios.get(Get_All_Film_API_URL);
  }
}

export default new GetAllFilmAPI();
