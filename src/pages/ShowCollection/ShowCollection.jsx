import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ShowCollection extends Component {
  state = {  }
  render() { 
    const collection = this.props.location.state.collection
    return ( 
      <>
        <h1>This is the Show Collection Page</h1>
        <h4>{collection.title}</h4>
        <p>{collection.description}</p>
      </>
     );
  }
}
 
export default ShowCollection;