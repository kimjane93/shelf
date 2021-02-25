import React, { Component, useState, useEffect } from "react";
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
                  state: {collection}
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