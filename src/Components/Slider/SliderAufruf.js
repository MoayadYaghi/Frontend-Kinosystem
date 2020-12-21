import React from "react";
import MoviesSlider from "./Slider";
import SliderPicture from "../../API_Pulls/SliderPicture";

class SliderAufruf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Bilder: [],
    };
  }

  componentDidMount() {
    SliderPicture.getSliderImage().then((response) => {
      console.log(response);
      let BilderAPI = response.data.hits;
      console.log(BilderAPI);

      this.setState({ Bilder: BilderAPI });
    });
  }

  render() {
    return (
      <div>
        {this.state.Bilder.map((bi) => (
          <MoviesSlider key={bi.id} images={bi.webformatURL} text={bi.id} />
        ))}
      </div>
    );
  }
}
export default SliderAufruf;
