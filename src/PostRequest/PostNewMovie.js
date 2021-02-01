import React, { Component } from 'react';
import axios from 'axios'
import  "./Post.css";

class PostNewMovie  extends Component{
    constructor(props){
       super(props);

        this.state = {
            Filmid:'',
            title:'',
            actor0:'',
            actor0Cara:'',
            actor1:'',
            actor1Cara:'',
            actor2:'',
            actor2Cara:'',
            awards:'',
            directors:'',
            genreList:'',
            plotLocal:'',
            runtimeMins:'',
            image:null,
            geladen: false,

        }
        
    }

    sendDatatoBackend(
        Filmid,
        title,
        /* actor0,
        actor0Cara,
        actor1,
        actor1Cara,
        actor2,
        actor2Cara, */
        awards,
        directors,
        genreList,
        plotLocal,
        runTime,
        image
        
        ){
            var Authorization = sessionStorage.getItem('token')
            this.state={Filmid,
                title,
                /* actor0,
                actor0Cara,
                actor1,
                actor1Cara,
                actor2,
                actor2Cara, */
                awards,
                directors,
                genreList,
                plotLocal,
                runTime,
                image}
        /* this.setState({Filmid: Filmid})
        this.setState({title: title	})
        this.setState({actor0: actor0})
        this.setState({actor0Cara: actor0Cara})
        this.setState({actor1: actor1})
        this.setState({actor1Cara: actor1Cara})
        this.setState({actor2: actor2})
        this.setState({actor2Cara: actor2Cara})
        this.setState({awards : awards})
        this.setState({directors : directors})
        this.setState({genreList : genreList})
        this.setState({plotLocal : plotLocal})
        this.setState({runtimeMins : runTime})
        this.setState({image : image}) */
        
            if(image !== null){
        console.log(this.state)
            }

         axios.post('http://localhost:8081/film/', this.state, {headers: {
            Authorization
            }})
            .then(response =>{
             console.log(response)
            })
            .catch(error => {
                console.log(error)
            }) 

            
            
            
    }

    render(){
        return null
    }
   
}







export default new PostNewMovie();