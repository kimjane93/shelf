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
import UpdateProfile from '../UpdateProfile/UpdateProfile'
import AddResource from '../AddResource/AddResource'
import AddNewResourceToCollection from '../AddNewResourceToCollection/AddNewResourceToCollection'
import AddCollection from '../AddCollection/AddCollection'
import * as userService from '../../services/userService'
import * as resourceApi from '../../services/resourceApi'
import * as collectionApi from '../../services/collectionApi'
import "./App.css";

class App extends Component {
  state = {
    user: authService.getUser(),
  };

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
    // this.setState(
    //   (state) => ({

    //   }), () =>  this.props.history.push('/profile')
    // )
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
          user ? <Profile /> : <Redirect to="/login" /> 
          }
        />
        <Route 
          exact path="/search"
          render={()=>
          user ? <Search /> : <Redirect to="/login" /> 
          }
        />
        <Route 
          exact path="/updatecollection"
          render={()=>
          user ? <UpdateCollection /> : <Redirect to="/login" /> 
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
          render={()=>
          user ? <AddNewResourceToCollection /> : <Redirect to="/login" /> 
          }
        />
        <Route 
          exact path="/addcollection"
          render={()=>
          user ? <AddCollection /> : <Redirect to="/login" /> 
          }
        />
      </>
    );
  }
}

export default App;
