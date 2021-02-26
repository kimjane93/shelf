import React from 'react'
import ResourceCard from '../../components/ResourceCard/ResourceCard'


const ResourceList = (props) => {
    return (
      <>
      <h2>{props.collection.title} Resources</h2>
        <div>
          {props.collection.resources.map((resource) => (
            <ResourceCard
              handleDeleteResourceFromCollection={props.handleDeleteResourceFromCollection}
              resource={resource}
              user={props.user}
              collection={props.collection}
            />
          ))}
        </div>
      </>
    );
  };
  
  export default ResourceList;