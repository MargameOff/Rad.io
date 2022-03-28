import React, { Component } from "react";
import Header from "../components/Header";

class Scan extends Component {
    constructor(props){
        super(props)
        this.startScan = this.startScan.bind(this)
        this.state = {test: null}
    }
    startScan(){
        let tmpRadioHS = []
        this.props.listOfRadios.list.map((radio) => {console.log("test");})
        console.log(this.isValidAudioUrl("https://audio.sdfsdfbfmtv.com/bfmbusiness_128.mp3"));
    }

    isValidAudioUrl(urlToCheck) {
        try {
            const res = fetch(urlToCheck, { method: 'HEAD', mode: 'no-cors' });
            return res.ok && res.headers.get('content-type').startsWith('audio');
        } catch (err) {
            return console.log(err.message);
        }
      }
  render() {
    return (
      <>
        <Header />
        <React.StrictMode>
          <h1>Scanner les Radios</h1>
          {this.startScan()}
        </React.StrictMode>
      </>
    );
  }
}

export default Scan;
