import React, { Component } from 'react';
import axios from 'axios';
import  "./Post.css";

const REST_API_Post_Login = ""

class FilmInaktivSetzen{
    


    vorstellungInaktivieren(filmId){
        var Authorization = sessionStorage.getItem('token')

 
        return axios.post("http://localhost:8081/film/"+filmId+"/aktiv/0", null,{headers: {
            Authorization
            }})

    }
}


export default new FilmInaktivSetzen();