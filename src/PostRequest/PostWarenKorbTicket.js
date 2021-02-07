import  "./Post.css";
import axios from 'axios'



class PostWarenKorb{
    


    postwWarenKorbTicketID(TicketID){
        var Authorization = sessionStorage.getItem('token')

        	console.log(TicketID)
        return axios.get("http://localhost:8081/warenkorb/ticket/"+TicketID, {headers: {
            Authorization
            }})

    }
}


export default new PostWarenKorb();