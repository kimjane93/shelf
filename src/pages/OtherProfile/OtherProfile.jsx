import React, { Component } from 'react';
import * as collectionApi from '../../services/collectionApi'
// import * as userApi from '../../services/userService'
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
    this.setState({ collections });
  }

  handleAddSubmit = (e) => {
    this.props.handleAddFriend(this.state.formData)
  }

  handleDeleteSubmit = (e) => {
    console.log('Made it to handleDeleteSubmit')
    this.props.handleDeleteFriend(this.state.formData)
  }

  render() {
    let user = this.props.location.state.user 
    let currentUser = this.props.currentUser
    return ( 
      <>
        <h1>{user.name}'s Profile</h1>
        <p>{user.description}</p>
        {this.props.friends.includes(user._id) ? 
          <div>
            <p>Friends already</p> 
            <button className="btn btn-danger" onClick={this.handleDeleteSubmit}>Delete Friend</button>
          </div>
        : 
          <div>
            <p>Not friends yet</p>
            <button className="btn btn-success" onClick={this.handleAddSubmit}>Add Friend</button>
          </div>
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