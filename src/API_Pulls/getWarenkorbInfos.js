import axios from "axios";

const Slider_Rest_API_URL =
  "http://localhost:8081/";

class getWarenkorbInfos {
   

  getTickets() {
    var Authorization = sessionStorage.getItem('token')

    return axios.get(Slider_Rest_API_URL+"warenkorb/", {headers: {
        Authorization}});
  }
  getSnacks(){
    var Authorization = sessionStorage.getItem('token')

    return axios.get(Slider_Rest_API_URL+"snacks/warenkorb", {headers: {
        Authorization}});
  }
  getDrink(){
    var Authorization = sessionStorage.getItem('token')

    return axios.get(Slider_Rest_API_URL+"getraenk/warenkorb", {headers: {
        Authorization}});
  }
}

         
export default new getWarenkorbInfos();