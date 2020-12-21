import React, { useState } from "react";
import MoviesSlider from './Slider'
import SliderAPI from '../../API_Pulls/SliderAPI'
import axios from 'axios'




class SliderInfoComponent extends React.Component{
    
   
     constructor(props){
        super(props)
        this.state = {
            informationen:[]
        }
    } 

    
    
   
    componentDidMount(){

        

        /* fetch(
            `https://imdb-api.com/en/API/SearchMovie/k_ucj1yd23/John Wick`
          )
          .then((response) => response.json())
          .then(({ results }) => results.map(({ image }) => image))
          .then(setImages);

          
        fetch(
            `https://imdb-api.com/en/API/SearchMovie/k_ucj1yd23/John Wick`
          )
          .then((response) => response.json())
          .then(({ results }) => results.map(({ id }) => id))
          .then(setid); */
        
       


         SliderAPI.getSliderApi().then((response) => {
             console.log(response)
            
            let movies = response.data.results;
            this.setState({informationen: movies})
                   console.log(informationen)     
        })
    
        
    }
    
render(){
    
    
    
    

return ( 
    
    
             
    <div>
            



                    <h1 className = "text-center"> Namen Liste </h1>
                    <table className = "table table-striped" style={{marginLeft: 18 + '%'}}>
                        <thead>
                            <tr>

                                <td>Film ID</td>
                                <td>Film name</td>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.informationen.map(
                                    infos => 
                                    <tr key = {infos.id}>
                                        <td> {infos.id}</td>
                                        <td> {infos.title}</td>
                                                               

                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                    
                            
                   { this.state.informationen.map( info =>
                        
                        <div>
                            <img src={info.image} style={{height: '200px'}}></img>

                   {/*   <MoviesSlider key= {info.id} images={info.image} text = {info.id}/>  */}
                    </div>
)}


<MoviesSlider key= {id} images={images} text = {id}/> 
                </div>
                

)
        }
}
export default SliderInfoComponent;