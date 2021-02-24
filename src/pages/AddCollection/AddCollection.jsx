import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";


let blankFormData = {
  title: "",
  description: "",
  type: "",
}

class AddCollection extends Component {
  state = { 
    invalidForm: true,
    formData: {
      title: "",
      description: "",
    }
   }

  formRef = React.createRef()

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddCollection(this.state.formData);
    this.setState((state) => ({
      formData: blankFormData
    }))
  };

  handleChange = (e) => {
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value,
    };
    this.setState({
      formData,
      // invalidForm: !this.formRef.current.checkValidity(),
    });
  };

  render() { 
    return ( 
      <>
        <h3>Add Collection</h3>
          <form ref={this.formRef} onSubmit={this.handleSubmit}>
            <div class="form-group">
              <label>Title</label>
              <input type="text" name="title" value={this.state.formData.title} onChange={this.handleChange} required/>
            </div>
            <div class="form-group">
              <label>Description</label>
              <input type="text" name="description" value={this.state.formData.description} onChange={this.handleChange} required/>
            </div>
            <button class="btn btn-success" type="submit">Submit</button>
          </form>
      </>
     );
  }
}
 
export default AddCollection;