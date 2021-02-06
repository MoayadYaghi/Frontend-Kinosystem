import axios from 'axios';



class PostNewMovie{
    


    sendnewRegister(data){

        

    return axios.post('http://localhost:8081/benutzer/signup', data)

    }
}


export default new PostNewMovie();