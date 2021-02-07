import axios from 'axios';



class PostSnacks{
    


    sendSnacks(){
        var Authorization = sessionStorage.getItem('token')
        

    return axios.post('http://localhost:8081/ticket/'+TicketID+"/snack/"+SnackID, null, {headers: {
        Authorization
        }})

    }
}


export default new PostSnacks();