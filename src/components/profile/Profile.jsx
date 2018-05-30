import React, { Component } from 'react';
import ProfileBar from './Profilebar';
import Footer from '../mains/Footer';
import {Search} from 'semantic-ui-react'
import Categories from './Categories';
import firebase from 'firebase';

class Profile extends Component {
state={
  user:{}
}
componentWillMount() {
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      let name = user.displayName
      this.setState({user})
    }else{
      //No user signed in 
    }
  })
}

  render() { 
    return (  
      <div>
      <ProfileBar/>
        <div className='search-inp' class="ui icon input">
          <input className='search-inp' type="text" placeholder="Search..."/>
          <i className="search icon"></i>
        </div>
      <Categories/>
      <Footer/>
      </div>
    )
  }
}
 
export default Profile;