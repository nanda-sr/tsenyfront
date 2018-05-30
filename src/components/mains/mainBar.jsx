import React, { Component } from 'react';
import {Menu} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class MainBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e,{ name }) => {
    this.setState({ activeItem: name })
  }
  render() { 
    const{activeItem} = this.state;

    return ( 
      <Menu pointing secondary style={{height:'46px', marginBottom:'0px'}}>
      <Menu.Item className='uniqueBar' name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
      <Menu.Item className='uniqueBar' name='FAQ' active={activeItem === 'FAQ'} onClick={this.handleItemClick} />
      <Menu.Item className='uniqueBar' name='team' active={activeItem === 'team'} onClick={this.handleItemClick} />
      <Menu.Menu position='right'>
      <Link to='/login'> 
      <Menu.Item className='uniqueBar' name='log In' active={activeItem === 'log In'} onClick={this.handleItemClick} />
      </Link>
      <Link to='/signup'>
      <Menu.Item className='uniqueBar' name='sign Up' active={activeItem === 'sign Up'} onClick={this.handleItemClick} /> 
      </Link>
      </Menu.Menu>
    </Menu>
    )
  }
}
 
export default MainBar;