import axios from 'axios';
import  "./Post.css";
import LocalURL from '../constants';




class VorstellungHinzufügen{
    


    vorhinzu(startZeit, filmId, saal, grundpreis){
        console.log(startZeit)
        var Authorization = sessionStorage.getItem('token')
        
        parseInt(startZeit,10);

 
        return axios.post(LocalURL + "vorstellung/insert/film/"+filmId+"/kinosaal/"+saal +"/startzeit/"+startZeit+"/grundpreis/"+grundpreis+"/aktiv/1" , null,{headers: {
            Authorization
            }})

    }
}


export default new VorstellungHinzufügen();