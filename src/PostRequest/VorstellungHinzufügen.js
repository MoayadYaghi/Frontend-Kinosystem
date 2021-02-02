import React, { Component } from 'react';
import axios from 'axios';
import  "./Post.css";

const REST_API_Post_Login = ""

class VorstellungHinzufügen{
    
    vorhinzu(data){

    console.log(data)
        return axios.post('http://localhost:8081/vorstellung/vorstellung', data)

    }
}


export default new VorstellungHinzufügen();