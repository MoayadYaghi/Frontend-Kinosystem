import axios from "axios";
import LocalURL from '../constants';

const Slider_Rest_API_URL = LocalURL;

class getWarenkorbInfos {
  getTickets() {
    var Authorization = sessionStorage.getItem("token");

    return axios.get(Slider_Rest_API_URL + "warenkorb/", {
      headers: {
        Authorization,
      },
    });
  }
  getSnacks() {
    var Authorization = sessionStorage.getItem("token");

    return axios.get(Slider_Rest_API_URL + "snack/warenkorb", {
      headers: {
        Authorization,
      },
    });
  }
  getDrink() {
    var Authorization = sessionStorage.getItem("token");

    return axios.get(Slider_Rest_API_URL + "getraenk/warenkorb", {
      headers: {
        Authorization,
      },
    });
  }
}

export default new getWarenkorbInfos();
