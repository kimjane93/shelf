import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import authService from "../../services/authService";
import Users from '../Users/Users'
import Chat from '../Chat/Chat'
import HomePage from '../HomePage/HomePage'
import Profile from '../Profile/Profile'
import Search from '../Search/Search'
import UpdateCollection from '../UpdateCollection/UpdateCollection'
import ShowCollection from '../ShowCollection/ShowCollection'
import UpdateProfile from '../UpdateProfile/UpdateProfile'
import AddResource from '../AddResource/AddResource'
import AddNewResourceToCollection from '../AddNewResourceToCollection/AddNewResourceToCollection'
import AddCollection from '../AddCollection/AddCollection'
import * as userService from '../../services/userService'
import * as resourceApi from '../../services/resourceApi'
import * as collectionApi from '../../services/collectionApi'
import "./App.css";
// import resource from "../../../models/resource";

class App extends Component {
  state = {
    user: authService.getUser(),
    collections: [],
    newResource: "",
    currentCollection: null
  };

  async componentDidMount(){
    if(this.state.user){
      const collections = await collectionApi.getMyCollections(this.state.user)
      console.log(`These are the returned collections! ${collections}`)
      this.setState({collections: collections})
    }
  }

  handleLogout = () => {
    authService.logout();
    this.setState({ user: null });
    this.props.history.push("/");
  };

  handleSignupOrLogin = () => {
    this.setState({ user: authService.getUser() });
  };

  handleAddResource = async(newResourceData) => {
    const newResource = await resourceApi.create(newResourceData)
    this.setState(
      (state) => ({
        newResource: newResource._id
      }), () =>  this.props.history.push({
        pathname: '/addnewresource',
        state: this.state.newResource
      })
    )
  }

  handleAddCollection = async(newCollectionData) => {
    const newCollection = await collectionApi.create(newCollectionData)
    this.setState(
      (state) => ({
        collections: [...state.collections, newCollection]
      }), () =>  this.props.history.push('/profile')
    )
  }

  handleAddNewResourceToCollection = async(newResourceCollectionData) => {
    console.log(newResourceCollectionData)
    const collection = await collectionApi.addNewResource(newResourceCollectionData)
    this.setState(
      (state) => ({
        collections: [...state.collections, collection]
      }),
      () => this.props.history.push({
        pathname: '/showcollection',
        state: collection
      })
    )
  }

  handleDeleteResourceFromCollection = async(deleteData) => {
    console.log(deleteData)
    const collection = await collectionApi.deleteResource(deleteData)
    const collectionIdx = this.state.collections.findIndex(c => c._id == collection._id)
    const collections = this.state.collections.splice(collectionIdx, 1, collection)
    this.setState((state) => ({
      currentCollection: collection,
      collections: collections
    }))
  }


  render() {
    const { user } = this.state
    return (
      <>
        <NavBar user={this.state.user} handleLogout={this.handleLogout}/>
        <Route
          exact
          path="/"
          render={() => (
            <main>
              <h1>Welcome. This is an authorization template.</h1>
            </main>
          )}
        />
        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <Signup
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <Login
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/users"
          render={() =>
            user ? <Users /> : <Redirect to="/login" />
          }
        />
        <Route 
          exact path="/chat"
          render={()=>
          user ? <Chat /> : <Redirect to="/login" /> 
        }
        />
        <Route 
          exact path="/home"
          render={()=>
          user ? <HomePage /> : <Redirect to="/login" /> 
          }
        />
        <Route 
          exact path="/profile"
          render={()=>
          user ? 
            <Profile 
              collections={this.state.collections}
            /> : <Redirect to="/login" /> 
          }
        />
        <Route 
          exact path="/search"
          render={()=>
          user ? 
            <Search/> : <Redirect to="/login" /> 
          }
        />
        <Route 
          exact path="/updatecollection"
          render={()=>
          user ? <UpdateCollection /> : <Redirect to="/login" /> 
          }
        />
        <Route 
          exact path="/showcollection"
          render={({ location, history })=>
          user ? 
            <ShowCollection 
              history={history}
              location={location}
              user={this.state.user}
              currentCollection={this.state.currentCollection}
              handleDeleteResourceFromCollection={this.handleDeleteResourceFromCollection}
            /> : <Redirect to="/login" /> 
          }
        />
        <Route 
          exact path="/updateprofile"
          render={()=>
          user ? <UpdateProfile /> : <Redirect to="/login" /> 
          }
        />
        <Route 
          exact path="/addresource"
          render={({history})=>
          user ? 
          <AddResource
            history={history}
            handleAddResource={this.handleAddResource}
            user={this.state.user}
          /> : <Redirect to="/login" /> 
          }
        />
        <Route 
          exact path="/addnewresource"
          render={({history, location})=>
          user ? 
          <AddNewResourceToCollection 
            history={history}
            location={location}
            collections={this.state.collections}
            handleAddNewResourceToCollection={this.handleAddNewResourceToCollection}
          /> : <Redirect to="/login" /> 
          }
        />
        <Route 
          exact path="/addcollection"
          render={({ history })=>
          user ? <AddCollection handleAddCollection={this.handleAddCollection} user={this.state.user} history={history}/> : <Redirect to="/login" /> 
          }
        />
      </>
    );
  }
}

export default App;
