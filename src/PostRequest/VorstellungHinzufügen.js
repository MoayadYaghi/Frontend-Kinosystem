import React, { Component } from 'react';
import axios from 'axios';
import  "./Post.css";

const REST_API_Post_Login = ""

class VorstellungHinzufügen{
    


    vorhinzu(startZeit, filmId, saal, grundpreis){
        console.log(startZeit)
        var Authorization = sessionStorage.getItem('token')
        
        parseInt(startZeit,10);

 
        return axios.post("http://localhost:8081/insert/vorstellung/film/"+filmId+"/kinosaal/"+saal +"/startzeit/"+startZeit+"/grundpreis/"+grundpreis+"/aktiv/1" , null,{headers: {
            Authorization
            }})

    }
}


export default new VorstellungHinzufügen();