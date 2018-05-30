import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Menu, Icon, Label} from 'semantic-ui-react';
import {logout} from '../../services/auth-services';
import * as firebase from 'firebase'

class ProfileBar extends Component {
  state = { 
    user:{},
    activeItem: 'home' 
  }

  handleItemClick = (e, { name }) => {
    this.setState({activeItem: name})
  }

  toLogout(){
   logout();
  }
  loggedOut(){
    firebase.auth().signOut().then(function(){
      window.location.href = '/'
    })
    .catch(e=>console.log(e))
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

  render(){ 
    const{activeItem } = this.state;
    const imageProps = {
      avatar: true,
      spaced: 'right',
      src: this.state.user.photoURL,
    }
    return (
      <Menu pointing secondary style={{height:'46px', marginBottom:'40px'}}>
    <Link to='/'> 
  <Menu.Item className='uniqueBar' name='home' active={activeItem === 'home'} onClick={this.handleItemClick}/>
    </Link>
    <Link to='/profile/wishlist'> 
      <Menu.Item className='uniqueBar' name='wish list' active={activeItem === 'wish list'} onClick={this.handleItemClick} />
    </Link>
  <Link to='/profile'>
      <Menu.Item className='uniqueBar' name='profile' active={activeItem === 'profile'} onClick={this.handleItemClick} />
  </Link>
      <Menu.Menu position='right'>
         <Label as='a' content= {this.state.user.displayName} image={imageProps} />      
        <Menu.Item className='uniqueBar' name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} onClick={this.loggedOut}/>
      </Menu.Menu>
    </Menu>
    )
  }
}
 
export default ProfileBar ;