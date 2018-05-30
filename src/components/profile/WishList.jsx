import React, { Component } from 'react';
import ProfileBar from './Profilebar';
import Footer from '../mains/Footer';
import {Card, Image} from 'semantic-ui-react';

class WishList extends Component {
  state = {
    electronics: [],
    wishlist:[]
  }
  render() { 
    return ( 
      <div>
        <ProfileBar/>
        <Card>
          <Image src="/images/wishlist.png"/>        
        </Card>
        <Footer/>
      </div>
     )
  }
} 
 
export default WishList;