import React, { Component } from 'react';
import Card from './Card';

class Radios extends Component {
    constructor(props){
        super(props)

    }
    render() {
        let tmp = [];
            this.props.listOfRadios.map((radio, index) => (tmp.push(<Card key={index} click={() => this.props.setCurrentRadio(radio)} radio={radio} />)))
        return (
            <div className="radios" id='content'>
                <div id="result">
                    {tmp}
                </div>
            </div>
        );
    }
}

export default Radios;