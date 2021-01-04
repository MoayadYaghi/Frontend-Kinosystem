import React from "react";
import FilmInfo from "../../API_Pulls/FilmInfo";

class FilmInfoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filme: [],
    };
  }

  componentDidMount() {
    FilmInfo.getFilm().then((response) => {
      this.setState({ filme: response.data });
    });
  }

  render() {
    return (
      <div>
        <h1 className="text-center"> Namen Liste </h1>
        <table className="table table-striped" style={{ marginLeft: 18 + "%" }}>
          <thead>
            <tr>
              <td>Film Name</td>
              <td>Film ID</td>
              <td>Film Altersfreigabe</td>
            </tr>
          </thead>
          <tbody>
            {this.state.filme.map((filme) => (
              <tr key={filme.id}>
                <td> {filme.id}</td>
                <td> {filme.name}</td>
                <td> {filme.alterfreigabe}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default FilmInfoComponent;
