import  "./Post.css";
import axios from 'axios'



class PostWarenKorb{
    


    postwWarenKorbTicketID(TicketID){
        var Authorization = sessionStorage.getItem('token')

 
        return axios.post("http://localhost:8081/warenkorb/ticket/"+TicketID, null,{headers: {
            Authorization
            }})

    }
}


export default new PostWarenKorb();