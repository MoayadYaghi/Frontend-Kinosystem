import React, { Component } from 'react';
import axios from 'axios';
import  "./Post.css";
import LocalURL from '../constants';

const REST_API_Post_Login = ""

class FilmInaktivSetzen{
    


    vorstellungInaktivieren(filmId, reaktivieren){
        var Authorization = sessionStorage.getItem('token')

 
        return axios.post(LocalURL + "film/"+filmId+"/aktiv/"+reaktivieren, null,{headers: {
            Authorization
            }})

    }
}


export default new FilmInaktivSetzen();