import React, { Component } from "react";
import TagsList from "./TagsList";

export default class Tags extends Component {
  constructor(props) {
    super(props);
    this.isTagsOpen = false;
    this.listRef = React.createRef();
    this.hideList = this.hideList.bind(this);
    this.state = { showHideList: false}
  }


  hideList(){
    this.setState({ showHideList: !this.state.showHideList });
  }

  tagsOpen(){

  }

  render() {
    return(
        <>
            <button type="button" id="tagsButton" style={ this.isTagsOpen ? {borderEndEndRadius: 0, borderEndStartRadius: 0} : null } onClick={() => {this.isTagsOpen = !this.isTagsOpen; this.hideList()}}> Tags </button>
            <TagsList findTag={this.props.findTag} deleteAll={this.props.deleteAll} isSelected={this.props.isSelected} addTag={this.props.addTag} deleteTag={this.props.deleteTag} listOfTags={this.props.getAllTags} id={this.state.showHideList ? "center" : "close"} isOpen={this.isTagsOpen} />
        </>
    )
  }
}
