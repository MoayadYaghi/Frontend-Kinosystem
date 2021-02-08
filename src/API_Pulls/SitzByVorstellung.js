import axios from "axios";
import LocalURL from '../constants';

class sitzeByVorstellung {
  sitzeByVorstellung(vorstellungId) {
    var Authorization = sessionStorage.getItem("token");
    const Get_Sitze_By_Vorstellung =
    
     // ("http://localhost:8081/sitz/vorstellung/" + vorstellungId);

      (LocalURL + "sitz/vorstellung/" + vorstellungId);


    return axios.get(Get_Sitze_By_Vorstellung,{
      headers: {
        Authorization,
      },
    });
  }
}

export default new sitzeByVorstellung(); 