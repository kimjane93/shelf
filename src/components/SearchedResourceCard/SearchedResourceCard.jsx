import React, { Component } from "react";
import { Link } from "react-router-dom";
// import * as resourceApi from "../../services/resourceApi";
// import AddComment from '../AddComment/AddComment'
import "./SearchedResourceCard.css";

class ResourceCard extends Component {
  state = {
    resource: this.props.resource,
    comments: this.props.resource.comments,
    invalidForm: false,
    formData: {
      resource: this.props.resource._id,
      collection: "",
    },
  };

  formRef = React.createRef()


  handleChange = (e) => {
    const formData = {
      ...this.state.formData, [e.target.name]: e.target.value
    }
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleAddNewResourceToCollection(this.state.formData)
  }

  render(props) {
    let resource = this.state.resource;

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
          <form ref={this.formRef} onSubmit={this.handleSubmit}>
            {this.props.collections.map((collection)=> (
              <div>
                <input id="collection" type="radio" name="collection" value={collection._id} checked={this.state.formData.collection === collection._id} onChange={this.handleChange}/>
                <label htmlFor="#collection">{collection.title}</label>
              </div>
            ))}
            <button type="submit" className="btn btn-success">Add To Collection</button>
          </form>
        </div>
      </>
    );
  }
}

export default ResourceCard;
