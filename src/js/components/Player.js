import React, { Component } from 'react';
import PlayButton from './PlayButton';

class Player extends Component {
    constructor(props){
        super(props)
        this.state = {etat:null, volume: 100};
        this.audio = React.createRef();
        this.volume = React.createRef();
        this.play = this.play.bind(this)
        this.pause = this.pause.bind(this)
    }

    onPlay(e)
    {
        this.audio.current.play();
        this.setState({etat: "play"});
        e.stopPropagation();
    }

    volumeChanging(event)
    {
        if (event.target.value == 0){
            this.setState({volume: 0.0});
            this.pause();
        } else {
            this.play();
            this.setState({volume: event.target.value}); 
            this.audio.current.volume=this.state.volume/100
        }
    }

    pause()
    {
      this.setState({etat: "pause"});
      this.audio.current.pause();
    }
  
    play()
    {
      this.setState({etat: "play"});
      this.audio.current.play();
    }

    render() {
        return (
            <div id="player-bottom">
                <div id="player-info">
                    <img
                        src={require(`../../img/radios/${this.props.currentRadio.img}`)}
                        alt={this.props.currentRadio.name}
                    />
                    <div id="player-text">
                        <h1>{this.props.currentRadio.name}</h1>
                        <div id="player-tag">
                            {this.props.currentRadio.tags.map((tag, index) => <h2 key={index}>{tag}</h2>)}
                        </div>
                    </div>
                </div>
                <div id="player-navigation">
                <audio ref={this.audio} onCanPlay={(e)=>this.onPlay(e)} preload="auto" id="player" src={this.props.currentRadio.url}></audio>
                    <img id="player-speaker" src={require('../../img/volume.png')} />
                    <input type="range" min="0" max="100" defaultValue="100" id="myNumber" onChange={(event) => {this.volumeChanging(event)}}/>
                    <img id="player-speaker" src={require('../../img/volume.png')} />
                    <input id="player-reload" onClick={() => this.props.reload()} type="image" src= {require('../../img/reload.png')} alt="Reload" />
                    <PlayButton play={this.play} pause={this.pause} etat={this.state.etat}/>
                </div>
        </div>
        );
    }
}

export default Player;