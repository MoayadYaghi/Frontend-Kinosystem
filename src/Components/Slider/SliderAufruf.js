import React from "react";
import MoviesSlider from "./Slider";
import SliderAPI from "../../API_Pulls/SliderAPI";
import GetAllFilmAPI from "../../API_Pulls/GetAllFilmAPI"

var Bild = [];
    var Name = [];
    var id = [];

class SliderAufruf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Bilder: [],
    };
  }

  componentDidMount() {
    /* SliderAPI.getSliderApi().then((response) => {
      let movies = response.data.results;
      this.setState({ Bilder: movies }); */

      GetAllFilmAPI.getAllFilmAPI().then((response) => {

        this.setState({Bilder: response.data});
       
        console.log(this.state.Bilder);


      
    
    
    
    
    })
  }

  render() {
    this.state.Bilder.forEach((element) => {
      Bild.push(element.bild);
      Name.push(element.name);
      id.push(element.id);
      
    });

    return (
      <div>
        <MoviesSlider key={Name} images={Bild} text={Name} id={id}/>
      </div>
    );
  }
}
export default SliderAufruf;
