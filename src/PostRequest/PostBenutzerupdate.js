import axios from 'axios';



class PostBenutzerupdate{
    


    Postuserupdate(Vorname,Nachname, Email){
      
        var Authorization = sessionStorage.getItem('token')
        
        

 
        return axios.post("http://localhost:8081/benutzer/update",{Vorname,Nachname,Email},{headers: {
            Authorization
            }})

    }
}


export default new PostBenutzerupdate();