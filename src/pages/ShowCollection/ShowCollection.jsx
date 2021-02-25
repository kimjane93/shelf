import React, { Component } from 'react';
import { Link } from "react-router-dom";


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
        <p>{collection.title}</p>
        <p>{collection.description}</p>
        {collection.resources.map((resource) => (
          <p>{resource}</p>
        ))}
      </>
     );
  }
}
 
export default ShowCollection;