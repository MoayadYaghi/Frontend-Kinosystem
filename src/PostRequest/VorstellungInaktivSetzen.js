import React, { Component } from 'react';
import axios from 'axios';
import  "./Post.css";

const REST_API_Post_Login = ""

class VorstellungInaktivSetzen{
    


    vorstellungInaktivieren(vorstellungId){
        var Authorization = sessionStorage.getItem('token')

 
        return axios.post("http://localhost:8081/vorstellung/"+vorstellungId+"/aktiv/0", null,{headers: {
            Authorization
            }})

    }
}


export default new VorstellungInaktivSetzen();