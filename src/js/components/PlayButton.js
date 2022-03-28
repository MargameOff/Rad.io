import React, { Component } from 'react'

export default class PlayButton extends Component {
    constructor(props){
        super(props)
        this.switchAction = this.switchAction.bind(this)
    }

    switchAction(){

        if (this.props.etat == "play"){
            this.props.pause()
        }
        else if (this.props.etat == "pause"){
            this.props.play()
        } else {}
    }
  render() {
    return (
        <input id="player-button" onClick={() => this.switchAction()} type="image" src={this.props.etat == "play" ? require('../../img/pause.png') : require('../../img/play.png')} alt="Login" />
    )
  }
}
