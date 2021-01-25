import React, { Component } from "react";

import "./Shop.css";


// const FanShop = () => {}
class FanShop extends Component {
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
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
  }

  render() {
    return (
      <div className="FanShop">
        <div className="ProduktName">Produktname</div>
        <div className="ProduktBild">Produktbild</div>
        <div className="Produktbeschreibung"> Produktbeschreibung </div>
        <form>
          <div className="Größe">
            <label>
              Größe:
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </label>
          </div>
          <div className="Anzahl">
            <label>
              Anzahl:
              <input
                name="numberOfGuests"
                type="number"
                value={this.state.numberOfGuests}
                onChange={this.handleInputChange}
              />
            </label>
          </div>
          <div className="Männlich">
            <label>
              Männlich:
              <input
                name="isGoing"
                type="checkbox"
                checked={this.state.isGoing}
                onChange={this.handleInputChange}
              />
            </label>
          </div>
          <div className="Weiblich">
            <label>
              Weiblich:
              <input
                name="isGoing"
                type="checkbox"
                checked={this.state.isGoing}
                onChange={this.handleInputChange}
              />
            </label>
          </div>
          <div className="Ausgewählt">
            <label>
              Ausgewählt:
              <input
                name="isGoing"
                type="checkbox"
                checked={this.state.isGoing}
                onChange={this.handleInputChange}
              />
            </label>
          </div>
        </form>
      </div>
    );
  }
}
export default FanShop;
