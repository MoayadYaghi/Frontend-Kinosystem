import axios from 'axios';
import  "./Post.css";
import LocalURL from '../constants';



class VorstellungInaktivSetzen{
    


    vorstellungInaktivieren(vorstellungId, reaktivieren){
        var Authorization = sessionStorage.getItem('token')

 
        return axios.post(LocalURL + "vorstellung/"+vorstellungId+"/aktiv/"+reaktivieren, null,{headers: {
            Authorization
            }})

    }
}


export default new VorstellungInaktivSetzen();