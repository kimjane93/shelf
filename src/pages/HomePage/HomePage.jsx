import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as resourceApi from '../../services/resourceApi'
import SearchedResourceCard from '../../components/SearchedResourceCard/SearchedResourceCard'
import './HomePage.css'


class HomePage extends Component{
    state = {
        results: [],
        user: this.props.user
    }

    async componentDidMount(){
        const results = await resourceApi.getRandomResources()
        this.setState({
            results: [...results]
        })
    }

    render (){
        return(
            <>
            <div className="random-resources">
             {this.state.results.map((result)=> (
                 <SearchedResourceCard 
                    resource={result}
                    user={this.state.user}
                 />
             ))}
            </div>
            </>
        )
    }
}



export default HomePage;