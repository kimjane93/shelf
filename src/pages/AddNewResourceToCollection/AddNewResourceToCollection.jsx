import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";


class AddNewResourceToCollection extends Component {
  state = { 
    invalidForm: false,
    formData: {
      collection: ""
    }
   }

  formRef = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSearch(this.state.formData);
  };

  handleChange = (e) => {
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value,
    };
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity(),
    });
  };

  render(props) { 
    return ( 
      <>
        <h1>This is the page where you add a resource to a collection!</h1>
        <form ref={this.formRef} onSubmit={this.handleSubmit}>
          {this.props.collections.map((collection) => (
            <div>
              <input type="radio" name="collection"/>
              <label>{collection.title}</label>
              <hr />
            </div>
          ))}
          <button type="submit" className="btn btn-success">Add to Collection</button>
        </form>
      </>
     );
  }
}
 
export default AddNewResourceToCollection;

