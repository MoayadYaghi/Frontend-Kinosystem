import axios from 'axios'

const Slider_Rest_API_URL = ('https://imdb-api.com/en/API/SearchMovie/k_59na12he/John Wick')

class SliderAPI {
    getSliderApi(){
        return axios.get(Slider_Rest_API_URL);

    }
}







export default new SliderAPI();