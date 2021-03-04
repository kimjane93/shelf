import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as resourceApi from '../../services/resourceApi'
import SearchedResourceCard from '../../components/SearchedResourceCard/SearchedResourceCard'

class Search extends Component {
  state = { 
    invalidForm: false,
    formData: {
      queryString: "",
    },
    results: []
   }

  formRef = React.createRef()

  handleSearch = async(queryString) => {
    const results = await resourceApi.search(queryString)
    this.setState((state) => ({
      results: [...results]
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.handleSearch(this.state.formData)
  }

  handleChange = (e) => {
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value
    }
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    })
  }

  render() { 
    return ( 
      <>
        <h1>This is the Search Page</h1>
        <form ref={this.formRef} onSubmit={this.handleSubmit}>
          <input type="text" name="queryString" value={this.state.formData.queryString} onChange={this.handleChange}/>
          <button className="btn btn-secondary" type="submit" disabled={this.state.invalidForm}>Search</button>
        </form>
        {this.state.results.map((result)=> (
                 <SearchedResourceCard 
                    resource={result}
                    user={this.props.user}
                    collections={this.props.collections}
                    handleAddResourceToCollection={this.props.handleAddResourceToCollection}
                 />
             ))}
      </>
     );
  }
}
 
export default Search;



