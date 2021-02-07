import axios from 'axios';
import LocalURL from '../constants';




class PostNewMovie{
    


    sendnewRegister(data){

//        return axios.post('http://localhost:8081/benutzer/signup', data)
    return axios.post(LocalURL + 'benutzer/signup', data)

    }
}


export default new PostNewMovie();