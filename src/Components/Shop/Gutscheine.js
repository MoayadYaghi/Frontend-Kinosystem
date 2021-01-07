import React, { Component } from "react";
import { Button } from "../Button";
import "./Shop.css";
import { Link } from "react-router-dom";

class Gutscheine extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
  }

  render() {
    return (
      <div className="Gutscheine">
        <div className="Gutscheinbetrag">Gutscheinbetrag</div>
        <div className="GutscheinBild">GutscheinBild</div>
        <form>
          <div className="Gutschein">
            <select
              name="Größe"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            >
              <option value="S-Gutschein">10€</option>
              <option value="M-Gutschein">20€</option>
              <option value="L-Gutschein">50€</option>
            </select>
          </div>
          <div className="GeschenkGutschein">
            <label>
              Geschenk Gutschein:
              <input
                name="isGoing"
                type="checkbox"
                value={this.state.numberOfGuests}
                onChange={this.handleInputChange}
              />
            </label>
          </div>
          <div className="An">
            <label>
              An:
              <input
                type="text"
                valueAn={this.state.value}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="Von">
            <label>
              Von:
              <input
                type="text"
                valueVon={this.state.value}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="Nachricht">
            <label>
              Nachricht:
              <input
                type="text"
                valueNachricht={this.state.value}
                onChange={this.handleChange}
              />
            </label>
          </div>
        </form>
      </div>
    );
  }
}
export default Gutscheine;
