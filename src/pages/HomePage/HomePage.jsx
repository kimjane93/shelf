import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as resourceApi from '../../services/resourceApi'


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
            <ul>
             {this.state.results.map((result)=> (
                 <li>{result.title}</li>
             ))}
            </ul>
            </>
        )
    }
}



export default HomePage;