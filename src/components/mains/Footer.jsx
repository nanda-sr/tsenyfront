import React, { Component } from 'react';
import {Segment, Container, Grid, Header, List} from 'semantic-ui-react';

class Footer extends Component {

  render() { 
    return ( 
      <Segment  inverted style={{width: '100vw', position:'relative', bottom: '0px'}}>
      <Container>
      <Grid columns={3} inverted divided>
        <Grid.Row>
      <Grid.Column>
      <List>
        <Header style={{textAlign:'left'}} inverted as='h5'>ABOUT US</Header>
    <List.Item icon='users' content='Tseny'/>
    <List.Item icon='marker' content='México City, México'/>
    <List.Item icon='mail' content='tseny@contact.com' />
    <List.Item icon='linkify' content='www.tseny.com' />
    <List.Item icon='call' content='Call Us' />
  </List>
    </Grid.Column>

    <Grid.Column>
      <List>
        <Header inverted as='h5'>WORK WITH US</Header>
     <List.Item icon='computer' content='IT Team'/>
     <List.Item icon='vcard outline' content='HR Team'/>
     <List.Item icon='idea' content='UX/UI Team'/>
     <List.Item icon='briefcase' content='Legal/Finance Team'/>
      </List>
    </Grid.Column>
    
    <Grid.Column>
      <List>
        <Header inverted as='h5'>FOLLOW US</Header>
    <List.Item icon='facebook square' content='Facebook' />
    <List.Item icon='twitter square' content='Twitter' />
    <List.Item icon='github alternate' content='GitHub' />
    <List.Item icon='linkedin square' content='LinkedIn' />
      </List>
    </Grid.Column>
        </Grid.Row>
      </Grid>
      </Container>
    </Segment>

    )
  }
}
 
export default Footer;