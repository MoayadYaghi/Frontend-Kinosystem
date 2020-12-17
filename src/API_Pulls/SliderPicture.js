import axios from 'axios'

const SliderPicture_Rest_API_URL = 'https://pixabay.com/api/?key=17555646-e40df9968035314583cab5eca&q=${query}'

class SliderPicture {
    getSliderImage(){
        return axios.get(SliderPicture_Rest_API_URL);

    }
}







export default new SliderPicture;