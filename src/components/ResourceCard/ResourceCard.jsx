import React, { Component } from "react";
import { Link } from "react-router-dom";
import authService from "../../services/authService";
import './ResourceCard.css'

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
  console.log(this.props.user)
  return (
    <>
      <div className={`card text-dark bg-light ${resource.type === 'website' ? 'website': resource.type === 'audio' ? 'audio' : resource.type === 'image' ? 'image' : resource.type === 'book' ? 'book' : resource.type === 'article' ? 'article' : resource.type === 'video' ? 'video' : 'video'} mb-3`}
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
            onClick={()=> this.props.handleDeleteResourceFromCollection(this.state.deleteData)}
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
