import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ResourceCard from '../../components/ResourceCard/ResourceCard'


class ShowCollection extends Component {
  state = {  }
  render() { 
    if (this.props.location.state.collection){
      let collection = this.props.location.state.collection
    } else {
      let collection = this.props.history.location.state
    }
    const collection = this.props.location.state
    return ( 
      <>
        <h1>This is the Show Collection Page</h1>
        <h4>{collection.title}</h4>
        <p>{collection.description}</p>
        <p><strong>Resources</strong></p>
        <hr />
        {collection.resources.map((resource) => (
          <p>{resource.title}</p>
        ))}
      </>
     );
  }
}
 
export default ShowCollection;