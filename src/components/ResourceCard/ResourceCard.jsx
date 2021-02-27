import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as resourceApi from "../../services/resourceApi";
import "./ResourceCard.css";

class ResourceCard extends Component {
  state = {
    resource: this.props.resource,
    comments: this.props.resource.comments,
    deleteData: {
      resource: this.props.resource,
      collection: this.props.collection,
    },
  };

  handleAddComment = async (formData) => {
    const resource = await resourceApi.addComment(formData);
    this.setState((state) => ({
      resource: resource,
      comments: [
        ...this.state.resource.comments,
        resource.comments[resource.comments.length - 1],
      ],
    }));
  };

  render(props) {
    let resource = this.props.resource;
    let collection = this.props.collection;

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
          } mb-3`}
          style={{ "max-width": "100%", "width": "75%" }}
        >
          <div className="card-header">
            <a href={resource.url}>{resource.title}</a>
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
                      {this.state.comments.length === 0 ? <p>No Comments Added</p> : this.state.comments.length.map((comment) => (
                        <p>Comment Blurb</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="btn"
              type="submit"
              onClick={() =>
                this.props.handleDeleteResourceFromCollection(
                  this.state.deleteData
                )
              }
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
