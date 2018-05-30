import React, { Component } from 'react';
import {getCategory} from '../../services/bestbuy';
import { ElecDetail } from './ProductsDetail';
import {Grid} from 'semantic-ui-react';
import ProfileBar from '../profile/Profilebar';
import Footer from '../mains/Footer';

class ElectronicsList extends Component {
 state = {
  electronics:[], 
  wishlist:[]
 }

componentWillMount(){
getCategory(this.props.match.params.id)
  .then(electronics=> {
    //console.log(electronics);
     electronics.products.sort(this.sortByPrice)
    this.setState(
      {electronics: electronics.products}
      )})
  
  };

 sortByPrice(a,b){
      if (a.regularPrice < b.regularPrice)
        return -1;
      if (a.regularPrice > b.regularPrice)
        return 1;
      return 0;
}


  render(){
    return( 
      <div>
        <ProfileBar/>
        <Grid columns={4}>
        <Grid.Row>
        {this.state.electronics.map(ele=> 
        <Grid.Column span={5} style={{margin: '10px'}}>
          <ElecDetail key = {ele.sku} {...ele}  wishList={this.addToWL}/>
          </Grid.Column>
      
        )}
        
      </Grid.Row>
        </Grid>

        <Footer/>
      </div>
    )
  }
}


export default ElectronicsList;