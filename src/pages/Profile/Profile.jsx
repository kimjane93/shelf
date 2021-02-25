import { PromiseProvider } from "mongoose";
import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Profile({collections}){
    return (
        <>
          <h1>Profile</h1>
          <div>
            {collections.map((collection) => (
              <>
              <p>{collection.title}</p>
              <p>{collection.description}</p>
              </>
            ))}
          </div>
        </>
    )
}



export default Profile;