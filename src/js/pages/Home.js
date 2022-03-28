import React, { Component } from "react";
import Header from "../components/Header";
import Player from "../components/Player";
import Radios from "../components/Radios";
import SearchBar from "../components/SearchBar";
import Tags from "../components/Tags";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tagSelected: [],
      selected: [],
      currentRadio: null,
      find: [],
      notFound: false
    };
    this.addTag = this.addTag.bind(this);
    this.deleteTag = this.deleteTag.bind(this);
    this.deleteAll = this.deleteAll.bind(this);
    this.getRadios = this.getRadios.bind(this);
    this.setCurrentRadio = this.setCurrentRadio.bind(this);
    this.findRadio = this.findRadio.bind(this);
    this.reload = this.reload.bind(this);
    this.findTag = this.findTag.bind(this);
    
  }
  listOfTags = this.getAllTags();
  findRadio(event) {
    let tmpRadios = [];
    this.props.listOfRadios.list.map((radio) => {
      if (radio.name.toLowerCase().includes(event.target.value.toLowerCase())) {
        tmpRadios.push(radio);
      }
    })
    if (tmpRadios.length == 0){
        this.setState({notFound: true})
    } else {
        this.setState({notFound: false})
    }
    tmpRadios = Array.from(new Set(tmpRadios));
    this.setState({find: tmpRadios});
  }

  findTag(event) {
    this.state.selected=[];
    this.deleteAll()
    if (event.target.value.length == 0) {
      this.setState({find: []});
      return;
    }
    let tmpRadios = [];
    this.listOfTags.map((tag, index) => {
      if (tag.toLowerCase().includes(event.target.value.toLowerCase())){
        this.state.selected[index]=true;
      }
    })
    this.props.listOfRadios.list.map((radio) => {
      radio.tags.map((tag) => {
        if (tag.toLowerCase().includes(event.target.value.toLowerCase())){
          tmpRadios.push(radio);
        }
      })
      })
    if (tmpRadios.length == 0){
        this.setState({notFound: true})
    } else {
        this.setState({notFound: false})
    }
    tmpRadios = Array.from(new Set(tmpRadios));
    this.setState({find: tmpRadios});
  }

  delay = ms => new Promise(res => setTimeout(res, ms));

  async reload() {
    let tmpCurrent = this.state.currentRadio
    this.setState({ currentRadio: null });
    await this.delay(200);
    this.setState({ currentRadio: tmpCurrent});
    
  }

  setCurrentRadio(radio) {
    this.setState({ currentRadio: radio });
  }

  deleteAll() {
    this.setState({ tagSelected: [], find: []});
  }

  deleteTag(tag) {
    this.setState({
      tagSelected: this.state.tagSelected.filter(function (v) {
        return v !== tag;
      }),
    });
  }

  addTag(tag) {
    if (tag == "totaltag") {
      this.setState({ tagSelected: [...this.getAllTags()] });
    } else {
      this.setState({ tagSelected: [...this.state.tagSelected, tag] });
    }
  }

  getAllTags() {
    let tabtags = [];
    this.props.listOfRadios.list.map((radio) =>
      radio.tags.map((tag) => tabtags.push(tag))
    );
    return Array.from(new Set(tabtags)).sort();
  }

  getRadios() {
    let tmpRadio = [];
    if (this.state.find.length != 0 || this.state.notFound == true) {
      return Array.from(new Set(this.state.find)).sort();
    } else {
      this.props.listOfRadios.list.map((radio) =>
        radio.tags.map((tag) => {
          if (this.state.tagSelected.includes(tag)) {
            tmpRadio.push(radio);
          }
        })
      );
      return Array.from(new Set(tmpRadio)).sort();
    }
  }

  render() {
    return (
      <>
        <Header />
        <React.StrictMode>
            <SearchBar find={this.state.find} findRadio={this.findRadio}/>
          <Tags
            findTag={this.findTag}
            isSelected={this.state.selected}
            deleteAll={this.deleteAll}
            deleteTag={this.deleteTag}
            addTag={this.addTag}
            listOfRadios={this.props.listOfRadios}
            getAllTags={this.getAllTags()}
          />
          <Radios
            setCurrentRadio={this.setCurrentRadio}
            tagSelected={this.state.tagSelected}
            listOfRadios={this.getRadios()}
          />
          {this.state.currentRadio == null ? (
            <></>
          ) : (
            <Player reload={this.reload} currentRadio={this.state.currentRadio} />
          )}
        </React.StrictMode>
      </>
    );
  }
}
