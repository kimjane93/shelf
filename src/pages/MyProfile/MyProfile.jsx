import React, { Component } from "react";
import { Link } from "react-router-dom";
import CollectionCard from '../../components/CollectionCard/CollectionCard'
import './MyProfile.css'

function MyProfile({collections, user}){
    return (
        <>
          <h1>Profile</h1>
          <div>
            <p>{user.name}</p>
            <p>{user.bio}</p>
          </div>
          <div className="collectionList">
            {collections.map((collection) => (
                <CollectionCard
                  collection={collection}
                  user={user} 
                  />
            ))}
          </div>
        </>
    )
}





export default MyProfile;