import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './CollectionCard.css'

class CollectionCard extends Component {
  state = {  }
  render() { 
    let collection = this.props.collection
    let user = this.props.user
    return (
      <>
        <div className="card collectionCard">
          <div className="card-body">
            <h5 className="card-title">{collection.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">{collection.description}</p>
            <Link
                to={{
                  pathname: "/showcollection",
                  state: {collection, user}
                }}
              >
                Details
              </Link> 
          </div>
        </div>
      </>
     );
  }
}
 
export default CollectionCard;