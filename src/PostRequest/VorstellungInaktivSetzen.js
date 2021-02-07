import React, { Component } from 'react';
import axios from 'axios';
import  "./Post.css";
import LocalURL from '../constants';

const REST_API_Post_Login = ""

class VorstellungInaktivSetzen{
    


    vorstellungInaktivieren(vorstellungId, reaktivieren){
        var Authorization = sessionStorage.getItem('token')

 
        return axios.post(LocalURL + "vorstellung/"+vorstellungId+"/aktiv/"+reaktivieren, null,{headers: {
            Authorization
            }})

    }
}


export default new VorstellungInaktivSetzen();