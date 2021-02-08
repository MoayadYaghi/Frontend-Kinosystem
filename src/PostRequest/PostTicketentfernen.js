import axios from 'axios';
import LocalURL from '../constants';


class PostTicketentfernen{
    


    sendTicketenfernen(TicketID){
        var Authorization = sessionStorage.getItem('token')
        

    return axios.post(LocalURL+"warenkorb/remove/ticket/"+TicketID, null, {headers: {
        Authorization
        }})

    }
}


export default new PostTicketentfernen();