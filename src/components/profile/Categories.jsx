import React, { Component } from 'react';
import {Segment, Container, Grid, Image} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import ProfileBar from './Profilebar';
import Footer from '../mains/Footer';

class Categories extends Component {

  render() { 
    return ( 
      <div >
      <Grid columns={4}>
      <Grid.Row style={{marginTop:'40px', marginLeft:'120px'}}>
      <Grid.Column>
      <Link to='/profile/category/abcat0401000'>
      <Segment style={{width:'150px', height:'150px'}} raised color='teal'>
      Digital Cameras
      <Image src='/images/digitalcameraicon.png'/>
      </Segment>
      </Link>
      </Grid.Column>

      <Grid.Column>
      <Link to='/profile/category/pcmcat242800050021'>
      <Segment style={{width:'150px', height:'150px'}} raised color='teal'>
      Health, Fitnnes & Beauty
      <Image src='/images/beauty.png'/>
      </Segment>
      </Link>
      </Grid.Column>

      <Grid.Column>
      <Link to='/profile/category/abcat0204000'>
      <Segment style={{width:'150px', height:'150px'}} raised color='teal'>
      HeadPhones
      <Image src='/images/headphones.png'/>
      </Segment>
      </Link>
      </Grid.Column>

      <Grid.Column>
      <Link to='/profile/category/abcat0101000'>
      <Segment style={{width:'150px', height:'150px'}} raised color='teal'>
      TV's
      <Image src='/images/television.png'/>
      </Segment>
      </Link>
      </Grid.Column>
      </Grid.Row> 
     
      <Grid.Row style={{marginTop:'40px', marginLeft:'120px'}}>
        <Grid.Column>
        <Link to='/profile/category/abcat0912000'>
        <Segment style={{width:'150px', height:'150px'}} raised color='teal'>
        Small Kitchen Appliances
        <Image style={{height: '100px'}} src='/images/kitchenApp.png'/>
        </Segment>
        </Link>
        </Grid.Column>
        <Grid.Column>
        <Link to='/profile/category/abcat0502000'>
        <Segment style={{width:'150px', height:'150px'}} raised color='teal'>
        Laptops
        <Image src='/images/laptops.png'/>
        </Segment>
        </Link>
        </Grid.Column>
        <Grid.Column>
        <Link to='/profile/category/abcat0904000'>
        <Segment style={{width:'150px', height:'150px'}} raised color='teal'>
        Ranges, Cooktops & Ovens
        <Image style={{width: '100px', height: '80px'}} src='/images/oven.png'/>
        </Segment>
        </Link>
        </Grid.Column>
        <Grid.Column>
        <Link to='/profile/category/pcmcat300300050002'>
        <Segment style={{width:'150px', height:'150px'}} raised color='teal'>
        VideoGame Consoles
        <Image src='/images/games.png'/>
        </Segment>
        </Link>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row style={{marginBottom:'30px', marginTop:'40px', marginLeft:'120px'}}>
        <Grid.Column>
          <Link to='/profile/category/pcmcat209000050006'>
          <Segment style={{width:'150px', height:'150px'}} raised color='teal'>
          Ipad, Tablets & E-readers
          <Image src='/images/tablet.png'/>
          </Segment>
          </Link>
        </Grid.Column>
        <Grid.Column> 
        <Link to='/profile/category/pcmcat209400050001'>
          <Segment style={{width:'150px', height:'150px'}} raised color='teal'>
          CellPhones
          <Image src='/images/cellphone.png'/>
          </Segment>
          </Link>
        </Grid.Column>
        <Grid.Column> 
        <Link to='/profile/category/abcat0901000'>
          <Segment style={{width:'150px', height:'150px'}} raised color='teal'>
          Refrigerators
          <Image src='/images/fridge.png'/>
          </Segment>
          </Link>
        </Grid.Column>
        <Grid.Column>
        <Link to='/profile/category/pcmcat241600050001'>
          <Segment style={{width:'150px', height:'150px'}} raised color='teal'>
          Home Audio
          <Image src='/images/speakers.png'/>
          </Segment>
          </Link>
        </Grid.Column>
      </Grid.Row>
  </Grid>
  </div>
  )
  }
}
 
export default Categories;