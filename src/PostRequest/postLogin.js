import React, { Component } from 'react';
import axios from 'axios';
import  "./Post.css";
import LocalURL from '../constants';

const REST_API_Post_Login = "";

class postLogin {
  sendnewLogin(data) {
    return axios.post(LocalURL + "login", data);
  }
}

export default new postLogin();
