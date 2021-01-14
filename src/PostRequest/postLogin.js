import React, { Component } from 'react';
import axios from 'axios';
import  "./Post.css";

const REST_API_Post_Login = ""

class PostNewMovie{
    
    sendnewLogin(data){

    return axios.post('hhtp://localhost:8081/PostLogin')

    }
}


export default new PostNewMovie();