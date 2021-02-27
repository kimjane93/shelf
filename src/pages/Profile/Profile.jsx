import React, { Component } from "react";
import { Link } from "react-router-dom";


function Profile({collections, user}){
    return (
        <>
          <h1>Profile</h1>
          <div>
            {collections.map((collection) => (
              <>
              <h4>{collection.title}</h4>
              <p>{collection.description}</p>
              <Link
                to={{
                  pathname: "/showcollection",
                  state: collection
                  // Need to Pass User here, potentially adjust access points of collection on ShowCollection
                }}
              >
                Details
              </Link>
              </>
            ))}
          </div>
        </>
    )
}





export default Profile;