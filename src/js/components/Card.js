import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className='radio' onClick={this.props.click} >
        <img className="img" src={require(`../../img/radios/${this.props.radio.img}`)} alt="" />
        <h4>{this.props.radio.name}</h4>
        {this.props.radio.tags.map((tag, index) => <h5 key={index}>{tag}</h5>)}
      </div>
    );
  }
}

export default Card;