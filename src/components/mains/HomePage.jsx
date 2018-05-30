import React, { Component } from 'react';
import {Container, Image, Grid, Segment} from 'semantic-ui-react';
import Carousel from './Carousel';
import Footer from './Footer';
import MainBar from './mainBar';


//import {Header, Container, Button, Responsive, Icon} from 'semantic-ui-react';

class HomePage extends Component {

  render() {
    return (
      <div>
      <MainBar/>
      <Container className="mainContent" style={{width: '100vw', height:'300px'}}>
      <Carousel/>
      <Image style={{width: '300px', height:'300px', marginRight:'800px', position:'relative', bottom:'50px'}} src="/images/logo.png" />
      </Container>
    <Grid relaxed columns={4} style={{marginBottom: '70px'}}>
      <Grid.Column>
      <Image style={{width:'200px', height: '200px', marginLeft:'30px'}} src="/images/mercado-libre.png"/>
      </Grid.Column>

      <Grid.Column>
        <Image style={{width:'200px', height: '200px'}} src="/images/best-buy-logo.png"/>
       </Grid.Column>

      <Grid.Column>
      <Image style={{width:'190px', height: '170px', marginLeft:'20px', marginTop:'30px'}} src="/images/amazon-logo.png"/>
      </Grid.Column>

      <Grid.Column>
        <Image style={{width:'350px', height: '200px', paddingRight:'64px'}} src="/images/walmart.png"/>
      </Grid.Column>
    </Grid>

      <Container style={{width:' 100vw', height:'80px' }}>

      </Container>

        <Footer/>


      </div>
    )
  }
}
export default HomePage;



