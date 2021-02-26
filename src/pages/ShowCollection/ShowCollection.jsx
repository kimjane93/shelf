import { plugin } from 'mongoose';
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ResourceCard from '../../components/ResourceCard/ResourceCard'
import * as collectionApi from '../../services/collectionApi'


class ShowCollection extends Component {
  state = { 
    collection: this.props.location.state,
    resources: this.props.location.state.resources
   }

  // static getDerivedStateFromProps(props, state){
  //   if(props.location.state.resources != state.resources){
  //     return {
  //       resources: props.resources
  //     }
  //   }
  //   return null
  // }

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
        {(this.props.currentCollection != null && this.state.collection._id === this.props.currentCollection._id) ?  
        this.props.currentCollection.resources.map((resource) => (
          <ResourceCard 
          collection={collection}
          resource={resource}
          handleDeleteResourceFromCollection={this.props.handleDeleteResourceFromCollection}
        />
       ))
        :
        this.state.resources.map((resource) => (
          <ResourceCard 
          collection={collection}
          resource={resource}
          handleDeleteResourceFromCollection={this.props.handleDeleteResourceFromCollection}
        />
       ))
        }
      </>
     );
  }
}
 
export default ShowCollection;