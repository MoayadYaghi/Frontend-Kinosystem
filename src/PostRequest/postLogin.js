import React, { Component } from "react";
import axios from "axios";
import "./Post.css";

const REST_API_Post_Login = "";

class postLogin {
  sendnewLogin(data) {
    return axios.post("http://localhost:8081/login", data);
  }
}

export default new postLogin();
