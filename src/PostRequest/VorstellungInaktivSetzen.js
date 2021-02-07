import axios from 'axios';



class VorstellungInaktivSetzen{
    


    vorstellungInaktivieren(vorstellungId, reaktivieren){
        var Authorization = sessionStorage.getItem('token')

 
        return axios.post("http://localhost:8081/vorstellung/"+vorstellungId+"/aktiv/"+reaktivieren, null,{headers: {
            Authorization
            }})

    }
}


export default new VorstellungInaktivSetzen();