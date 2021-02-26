import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ResourceCard from '../../components/ResourceCard/ResourceCard'
import * as collectionApi from '../../services/collectionApi'


class ShowCollection extends Component {
  state = { 
    collection: this.props.location.state,
    resources: this.props.location.state.resources
   }

   handleDeleteResourceFromCollection = async(deleteData) => {
    console.log(deleteData)
    const resourceId = await collectionApi.deleteResource(deleteData)
    const resources = this.state.resources.filter(r => r._id != resourceId)
    this.setState((state) => ({
      resources: resources
    }))
  }

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
        {this.state.resources.map((resource) => (
           <ResourceCard 
           collection={this.state.collection}
           resource={resource}
           handleDeleteResourceFromCollection={this.handleDeleteResourceFromCollection}
         />
        ))}
      </>
     );
  }
}
 
export default ShowCollection;