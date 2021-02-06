import axios from "axios";




class postLogin {
  sendnewLogin(data) {
    return axios.post("http://localhost:8081/login", data);
  }
}

export default new postLogin();
