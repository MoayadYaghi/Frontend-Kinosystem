import axios from 'axios'

const Slider_Rest_API_URL = 'https://imdb-api.com/en/API/SearchMovie/k_ucj1yd23/John Wick'

class SliderAPI {
    getSliderApi(){
        return axios.get(Slider_Rest_API_URL);

    }
}







export default new SliderAPI;