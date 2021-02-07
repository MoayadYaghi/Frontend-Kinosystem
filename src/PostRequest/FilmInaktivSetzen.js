import  "./Post.css";
import axios from 'axios'
import LocalURL from "../constants";



class FilmInaktivSetzen{
    


    vorstellungInaktivieren(filmId, reaktivieren){
        var Authorization = sessionStorage.getItem('token')
        var LINK = (LocalURL+"film/"+filmId+"/aktiv/"+reaktivieren)
 
        return axios.post(LINK, null,{headers: {
            Authorization
            }})

    }
}


export default new FilmInaktivSetzen();