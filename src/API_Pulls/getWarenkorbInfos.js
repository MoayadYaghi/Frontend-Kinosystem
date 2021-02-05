import axios from "axios";

const Slider_Rest_API_URL =
  "http://localhost:8081/";

class getWarenkorbInfos {
  getTickets() {
    return axios.get(Slider_Rest_API_URL+"warenkorb/");
  }
  getSnacks(){
    return axios.get(Slider_Rest_API_URL+"snacks/warenkorb");
  }
  getDrink(){
    return axios.get(Slider_Rest_API_URL+"getraenk/warenkorb");
  }
}

export default new getWarenkorbInfos();