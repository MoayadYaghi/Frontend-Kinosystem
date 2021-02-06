import axios from 'axios';



class VorstellungHinzufügen{
    


    vorhinzu(startZeit, filmId, saal, grundpreis){
        console.log(startZeit)
        var Authorization = sessionStorage.getItem('token')
        
        parseInt(startZeit,10);

 
        return axios.post("http://localhost:8081/vorstellung/insert/film/"+filmId+"/kinosaal/"+saal +"/startzeit/"+startZeit+"/grundpreis/"+grundpreis+"/aktiv/1" , null,{headers: {
            Authorization
            }})

    }
}


export default new VorstellungHinzufügen();