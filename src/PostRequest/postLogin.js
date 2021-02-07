
import axios from "axios";
import LocalURL from '../constants';





class postLogin {
  sendnewLogin(data) {
    //return axios.post("http://localhost:8081/login", data);
    return axios.post(LocalURL + "login", data);
  }
}

export default new postLogin();
