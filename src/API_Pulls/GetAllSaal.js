import axios from "axios";

class GetAllSaal {
  GetAllSaalAPI() {
   var Authorization = sessionStorage.getItem('token') 
    /* const Get_All_Saal_API_URL = */
      return axios.get("http://localhost:8081/kinosaal/all" , {headers: {
        Authorization}})

    /* Get_All_Saal_API_URL; */
  }
}

export default new GetAllSaal(); 