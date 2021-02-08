import axios from "axios";
import LocalURL from '../constants';

class GetAllSaal {
  GetAllSaalAPI() {
    var Authorization = sessionStorage.getItem("token");
    /* const Get_All_Saal_API_URL = */
      return axios.get(LocalURL + "kinosaal/all" , {headers: {
        Authorization}})

    /* Get_All_Saal_API_URL; */
  }
}

export default new GetAllSaal();
