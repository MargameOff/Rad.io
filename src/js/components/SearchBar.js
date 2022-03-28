import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { text: null };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ text: event.target.value });
  }
  render() {
    return (
      <div id="center">
        <input
          type="text"
          onChange={this.props.findRadio}
          placeholder="Rechercher une Radio"
          id="recherche"
        ></input>
        <br />
        <h2>{this.state.text}</h2> 
        <br />
      </div>
    );
  }
}
