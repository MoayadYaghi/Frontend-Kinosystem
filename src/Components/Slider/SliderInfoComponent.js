import React from "react";
import MoviesSlider from "./Slider";
import SliderAPI from "../../API_Pulls/SliderAPI";
import axios from "axios";

class SliderInfoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      informationen: [],
    };
  }

  componentDidMount() {
    SliderAPI.getSliderApi().then((response) => {
      console.log(response);
      let movies = response.data.results;
      console.log(movies.image);

      this.setState({ informationen: movies });
      console.log(this.state.informationen);
    });
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Namen Liste</h1>
        <table className="table table-striped" style={{ marginLeft: 18 + "%" }}>
          <thead>
            <tr>
              <td>Film ID</td>
              <td>Film name</td>
            </tr>
          </thead>
          <tbody>
            {this.state.informationen.map((infos) => (
              <tr key={infos.id}>
                <td> {infos.id}</td>
                <td> {infos.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {this.state.informationen.map((infos) => (
          <div>
            <div>{infos.id}</div>

            <img src={infos.image} style={{ height: "200px" }}></img>
            {/* <MoviesSlider key= {infos.id} images={infos.image} text = {infos.id}/> */}
          </div>
        ))}
      </div>
    );
  }
}
export default SliderInfoComponent;
