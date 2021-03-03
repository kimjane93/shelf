import React, { Component } from 'react';
import * as collectionApi from '../../services/collectionApi'
import CollectionCard from '../../components/CollectionCard/CollectionCard'

class OtherProfile extends Component {
  state = { 
    collections: [],
  }

  async componentDidMount() {
    const collections = await collectionApi.getOtherCollections(this.props.location.state.user)
    console.log(collections)
    this.setState({ collections });
  }

  render() {
    let user = this.props.location.state.user 
    let currentUser = this.props.currentUser
    return ( 
      <>
        <h1>This is another Profile Page!</h1>
        <p>{user.name}</p>
        <p>{user.description}</p>
        {this.state.collections.map((collection) => (
          <>
            <CollectionCard
              collection={collection}
            />
          </>
        ))}
      </>
     );
  }
}
 
export default OtherProfile;