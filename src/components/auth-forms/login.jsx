import React, { Component } from 'react';
import {Form, Header, Segment, Container, Message} from 'semantic-ui-react'
import {login, getUser} from '../../services/auth-services';
import {Link} from 'react-router-dom';

class Login extends Component {
state = {
  user:{}
}

onChange = (e) => {
  const {user} = this.state; 
  const field = e.target.name;
  const value = e.target.value;
  user[field]= value;
  this.setState({user})
}

toLogin = () => {
  login(this.state.user)
  .then(user=> {
    console.log(getUser());
    getUser();
    this.props.history.push('/auth/profile/');
  })
  .then(e=>console.error(e))
}
  render() { 
    return ( 
    <div>
      <Container style={{width: '400px', justifyContent: 'center', marginTop:'70px', marginBottom:'15px'}}>
      <img src="./images/tsenylogo2.png" alt=""/> 
        <Header as='h2'>Log In to your account</Header>
      </Container>
      <Container style={{width: '400px', justifyContent: 'center'}}>
      <Form onSubmit = {this.toLogin} massive style={{width: '400px', justifyContent: 'center'}}> 
      <Segment stacked big>
      <Form.Input onChange={this.onChange} icon='mail' placeholder='Email' type='email' name='email'/>
      <Form.Input onChange={this.onChange} icon='lock' placeholder='Enter Password' type='password'  name='password'/>
      <Form.Button primary style={{width:'370px'}} type='submit'>Log In</Form.Button>
      </Segment>
    </Form>
    <Message>
      <Message.Header>
        Don't have an account? <Link to='/signup'>Sign Up</Link>
      </Message.Header>
    </Message>
    </Container>
    </div>
      )
  }
}
 
export default Login;


/* <Form onSubmit = {this.toLogin}>
<Form.Field>
  <label>E-m@il</label>
  <input onChange={this.onChange} type="email" name="email" placeholder='Enter your email'/>
</Form.Field>
<Form.Field>
  <label>Password</label>
  <input onChange={this.onChange} type="password" name="password" placeholder='Password' />
</Form.Field>
<Button type='submit'>Submit</Button>
</Form> */