import React from 'react'
import MoviesSlider from './Slider'
import SliderPicture from '../../API_Pulls/SliderPicture'
import SliderAPI from '../../API_Pulls/SliderAPI'


class SliderAufruf extends React.Component{
    

    constructor(props){
        super(props)
        this.state = {
            Bilder:[]
        }
    }
    

    componentDidMount(){
       
       
        SliderAPI.getSliderApi().then((response) => {
            console.log(response)
           
           let movies = response.data.results;
           this.setState({Bilder: movies})
                      
       })
            
        
    }
        

    
render(){

    var Bild = []
    var Name = []
    this.state.Bilder.forEach(element => {
        Bild.push(element.image)
        Name.push(element.id)

    });

    
   
    

return ( 
    <div>
                    
                    {console.log(this.state.Bilder.image)}
                     {/* /* this.state.Bilder.map( bi =>  */ }
                        
                        
      <MoviesSlider key= {Name} images= {Bild} text = {Name}/> 
                     
                    
                </div>

)
        }
}
export default SliderAufruf;
