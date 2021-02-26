import React from "react";
import { Link } from "react-router-dom";

function ResourceCard({resource, handleDeleteResourceFromCollection}) {
  return (
    <>
      <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header"><a href={resource.url}>{resource.title}</a></div>
        <div class="card-body">
          <h5 class="card-title">Type: {resource.type}</h5>
          <p class="card-text">
            Description: {resource.description}
          </p>
        </div>
        <div class="card-body">
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
