import React, { Component } from "react";
import { Link } from "react-router-dom";
// import * as resourceApi from "../../services/resourceApi";
// import AddComment from '../AddComment/AddComment'
import "./SearchedResourceCard.css";

class ResourceCard extends Component {
  state = {
    resource: this.props.resource,
    comments: this.props.resource.comments,
    formData: {
      resource: this.props.resource,
      collection: this.props.collection,
    },
  };

  render(props) {
    let resource = this.state.resource;
    let collection = this.state.collection;

    return (
      <>
        <div
          className={`card text-dark bg-light ${
            resource.type === "website"
              ? "website"
              : resource.type === "audio"
              ? "audio"
              : resource.type === "image"
              ? "image"
              : resource.type === "book"
              ? "book"
              : resource.type === "article"
              ? "article"
              : resource.type === "video"
              ? "video"
              : "video"
          } search-card`}
          style={{ "width": "25%", "minWidth": "200px"}}
        >
          <div className="card-header">
            <a href={resource.url} target="_blank" >{resource.title}</a>
            <p style={{"float" : "right"}}>{resource.likes}</p>
          </div>
          <div className="card-body">
            <h5 className="card-title">Type: {resource.type}</h5>
            <p className="card-text">Description: {resource.description}</p>
          </div>
          <div className="card-body">
            <div className="card" style={{"width": "auto"}}>
              <button
                type="button" 
                data-toggle="collapse" 
                className="btn btn-sm btn-secondary"
                data-target="#multiCollapseExample2"
                aria-expanded="false"
                aria-controls="multiCollapseExample2"
              >
                Comments
              </button>
              <div className="row">
                <div className="col">
                  <div
                    className="collapse multi-collapse"
                    id="multiCollapseExample2"
                  >
                    <div className="card card-body overflow-auto">
                      {this.state.comments.length === 0 ? <p>No Comments Added</p> : this.state.comments.map((comment) => (
                        <p>{comment.content}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ResourceCard;
