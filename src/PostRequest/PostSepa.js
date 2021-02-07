import axios from 'axios';



class PostSepa{
    


    sendnewSepa(BestellungID, Iban){
        var Authorization = sessionStorage.getItem('token')
        

    return axios.post('http://localhost:8081/bezahlen/bestellung/'+BestellungID+'/iban/'+Iban, null, {headers: {
        Authorization
        }})

    }
}


export default new PostSepa();