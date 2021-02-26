import React from 'react'
import ResourceCard from '../../components/ResourceCard/ResourceCard'


const ResourceList = (props) => {
    return (
      <>
      <h2>This Collection's Resources</h2>
        <div>
          {/* {props.resources.map((resource) => (
            <ResourceCard
              handleDeleteResource={props.handleDeleteResource}
              resource={resource}
              user={props.user}
            />
          ))} */}
        </div>
      </>
    );
  };
  
  export default ResourceList;