import  "./Post.css";
import axios from 'axios'



class FilmInaktivSetzen{
    


    vorstellungInaktivieren(filmId, reaktivieren){
        var Authorization = sessionStorage.getItem('token')

 
        return axios.post("http://localhost:8081/film/"+filmId+"/aktiv/"+reaktivieren, null,{headers: {
            Authorization
            }})

    }
}


export default new FilmInaktivSetzen();