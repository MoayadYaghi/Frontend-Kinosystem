import React, { Component } from "react";

import { Link } from "react-router-dom";

class Test1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Eingabe: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const Value = target.value;

    this.setState({ Eingabe: Value });
    /* this.setState({[name]: Pass}); */
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log(this.state.Eingabe);

    localStorage.setItem("Text1", this.state.Eingabe);
  }

  render() {
    return (
      <div>
        <form className="FormFenster" onSubmit={this.handleSubmit}>
          <div>
            <label>
              <input
                className="InputTextField"
                placeholder="Text"
                name="Benutzername"
                type="text"
                value={this.state.Eingabe}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="SubmitField">
            <input className="Submitbutton" type="submit" value=" Einloggen" />
          </div>
        </form><br/>

        <Link className="Test1" to="/test2">
          Ergebnis Anzeigen
        </Link>
      </div>
    );
  }
}
export default Test1;
