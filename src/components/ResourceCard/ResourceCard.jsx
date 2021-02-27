import React, { Component } from "react";
import { Link } from "react-router-dom";
import resourceApi from '../../services/resourceApi'
import './ResourceCard.css'

class ResourceCard extends Component {
  state = {
    resource: this.props.resource,
    comments: this.props.resource.comments,
    deleteData: {
    resource: this.props.resource,
    collection: this.props.collection
    }
  }

  handleAddComment = async(formData) => {
    const resource = await resourceApi.addComment(formData)
    this.setState((state) => ({
      resource: resource,
      comments: [...this.state.resource.comments, resource.comments[resource.comments.length-1]]
    }))
  }

render (props) {
  let resource = this.props.resource
  let collection = this.props.collection

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
