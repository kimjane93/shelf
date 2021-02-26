import React from "react";
import { Link } from "react-router-dom";

function ResourceCard({resource, handleDeleteResourceFromCollection}) {
  return (
    <>
      <div className="card text-dark bg-light mb-3" style={{'max-width': '18rem'}}>
        <div class="card-header"><a href={resource.url}>{resource.title}</a></div>
        <div className="card-body">
          <h5 className="card-title">Type: {resource.type}</h5>
          <p className="card-text">
            Description: {resource.description}
          </p>
        </div>
        <div className="card-body">
          <Link 
            className="card-link"
            to={{
              pathname: '/details',
              state: { resource }
          }}>Details</Link>
          <button
            className="btn"
            type="submit"
            onClick={()=> handleDeleteResourceFromCollection(resource._id)}
          >
            Delete From Collection
          </button>
        </div>
      </div>
    </>
  );
}

export default ResourceCard;
