import React, { Component } from 'react'

export default class TagsList extends Component {
    constructor(props){
        super(props);
        this.selectAll();
    }

    switchSelect(e,index)
    {
        this.props.isSelected[index] = !this.props.isSelected[index]
        if (this.props.isSelected[index])
        {
            this.props.addTag(e.target.textContent);
        }
        else
        {
            this.props.deleteTag(e.target.textContent);
        }
    }
    
    selectAll()
    {
        this.props.listOfTags.map((tag, index) => {this.props.isSelected[index] = true})
        this.props.addTag("totaltag");
    }

    deselectAll(e)
    {
        this.props.listOfTags.map((tag,index) => this.props.isSelected[index] = false);
        this.props.deleteAll();
    }

  render() {
    return (
        <div id={this.props.id}>
          <div id="tagList">
          <button id='choix' onClick={() => this.selectAll()}>Select All</button>
          <button id='choix' onClick={() => this.deselectAll()}>Deselect All</button>
          <input
          type="text"
          style={{ fontSize: 12, width: 150 }}
          onChange={this.props.findTag}
          placeholder="Rechercher un Tag"
          id="recherche"
        ></input>
          <div id='full' />
            {this.props.listOfTags.map((tag, index) => (
              <button key={index} onClick={(e) => {this.switchSelect(e, index)}} id={this.props.isSelected[index] ? "tagClicked" : "tag"} >{tag}</button>
            ))}
          </div>
        </div>
      );
  }
}
