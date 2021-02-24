import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {Form} from 'semantic-ui-react'

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
      type: "",
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
      invalidForm: !this.formRef.current.checkValidity(),
    });
  };

  render() { 
    return ( 
      <>
        <h3>Add Collection</h3>
          <Form>
              <Form.Input fluid label='Title' placeholder='Title' name='title' value={this.state.formData.title} onChange={this.handleChange} required />
              <Form.Input fluid label='Description' placeholder='Description' name='description' value={this.state.formData.title} onChange={this.handleChange} required />
            <Form.Button>Submit</Form.Button>
          </Form>
      </>
     );
  }
}
 
export default AddCollection;