import React, { Component } from "react";
import { Link } from "react-router-dom";

class ResourceCard extends Component {
  state = {
    deleteData: {
    resource: this.props.resource,
    collection: this.props.collection
    }
  }

render (props) {
  let resource = this.props.resource
  let collection = this.props.collection
  let handleDeleteResourceFromCollection = this.props.handleDeleteResourceFromCollection
  return (
    <>
      <div className={`card text-dark ${resource.type === 'website' ? 'bg-light': resource.type === 'audio' ? 'bg-primary' : resource.type === 'graphic' ? 'bg-secondary' : resource.type === 'book' ? 'bg-warning' : resource.type === 'article' ? 'bg-success' : resource.type === 'video' ? 'bg-danger' : 'bg-info'} mb-3`}
      style={{'max-width': '18rem'}}>
        <div class="card-header"><a href={resource.url}>{resource.title}</a></div>
        <div className="card-body">
          <h5 className="card-title">Type: {resource.type}</h5>
          <p className="card-text">
            Description: {resource.description}
          </p>
        </div>
        <div className="card-body">
          <Link 
            className="card-link"
            to={{
              pathname: '/details',
              state: { resource }
          }}>Details</Link>
          <button
            className="btn"
            type="submit"
            onClick={()=> handleDeleteResourceFromCollection(this.state.deleteData)}
          >
            Delete From Collection
          </button>
        </div>
      </div>
    </>
  );
        }
}

export default ResourceCard;
