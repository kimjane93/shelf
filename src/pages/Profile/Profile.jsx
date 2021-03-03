import React, { Component } from "react";
import { Link } from "react-router-dom";
import CollectionCard from '../../components/CollectionCard/CollectionCard'

function Profile({collections, user}){
    return (
        <>
          <h1>Profile</h1>
          <div>
            <p>{user.name}</p>
            <p>{user.bio}</p>
          </div>
          <div>
            {collections.map((collection) => (
              <>
              {/* <h4>{collection.title}</h4>
              <p>{collection.description}</p>
              <Link
                to={{
                  pathname: "/showcollection",
                  state: {collection, user}
                }}
              >
                Details
              </Link> */}
              <CollectionCard
                collection={collection}
                user={user} 
              />
              </>
            ))}
          </div>
        </>
    )
}





export default Profile;