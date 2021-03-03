import React, { Component } from 'react';
import * as collectionApi from '../../services/collectionApi'
import * as userApi from '../../services/userService'
import CollectionCard from '../../components/CollectionCard/CollectionCard'
import '../MyProfile/MyProfile.css'

class OtherProfile extends Component {
  state = { 
    collections: [],
    currentUser: this.props.currentUser,
    formData: {
      user: this.props.location.state.user,
      currentUser: this.props.currentUser
    }
  }

  async componentDidMount() {
    const collections = await collectionApi.getOtherCollections(this.props.location.state.user)
    // console.log(collections)
    this.setState({ collections });
  }

  handleAddFriend = async (formData) => {
    const currentUser = await userApi.addFriend(this.state.formData)
    console.log(`This is a miracle: ${currentUser}`)
    this.setState({currentUser: currentUser})
  }

  render() {
    let user = this.props.location.state.user 
    let currentUser = this.state.currentUser
    return ( 
      <>
        <h1>This is another Profile Page!</h1>
        <p>{user.name}</p>
        <p>{user.description}</p>
        {currentUser.friends.includes(user._id) ? <p>Friends already</p> 
        : 
          <>
            <p>Not friends yet</p>
            <button onClick={this.handleAddFriend}>Add Friend</button>
          </>
        }
        <div className="collectionList">
          {this.state.collections.map((collection) => (
            <CollectionCard
              collection={collection}
            />
          ))}
        </div>
      </>
     );
  }
}
 
export default OtherProfile;