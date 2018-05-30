import React, { Component } from 'react';
import {Form, Container, Header, Segment, Message, Image, Icon} from 'semantic-ui-react';
import {signup} from '../../services/auth-services';
import {Link} from 'react-router-dom';
import firebase from 'firebase';

class SignUp extends Component {
  state = {
   user:{}
  }

 onSubmit=(e)=>{
    e.preventDefault();
    signup(this.state.user)
    .then((user)=>{
      alert("salio",user.email)
    })
    this.props.history.push('/profile/:id');
  }

  onChange = (e) => {
    const {user} = this.state;
  const field = e.target.name;
  const value = e.target.value;
  user[field] = value;
  this.setState({user})

  }

  authgoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(function(result){
    window.location.href = '/profile'
    })
    .catch(e=>console.log(e))
  }

  render() { 
    return (
      <div>
      <div   style={{display: 'flex', width: '320px', flexWrap: 'wrap', position: 'relative', top: '572px', left: '100px'}} >    
      <Image style={{width:'305px', height: '100px', marginBottom: '60px'}} onClick={this.authgoogle} src="/images/sugoogle.png"/>
      <Image style={{width:'305px', height: '130px'}} src="/images/suface.png"/>
      </div>
      <Container style={{width: '400px', justifyContent: 'center', marginTop:'70px', marginBottom:'15px'}}>
      <img src="./images/tsenylogo2.png" alt=""/> 
        <Header as='h2'>Create your account</Header>
      </Container>
      <Container style={{width: '400px', justifyContent: 'center'}}>
      <Form onSubmit = {this.onSubmit} massive style={{width: '400px', justifyContent: 'center'}}> 
      <Segment stacked big>
      <Form.Input onChange={this.onChange} icon='user' placeholder='First Name' type='text' name='firstName'/>
      <Form.Input onChange={this.onChange} icon='user' placeholder='Last Name' type='text' name='lastName' />
      <Form.Input onChange={this.onChange} icon='mail' placeholder='Email' type='email' name='email'/>
      <Form.Input onChange={this.onChange} icon='lock' placeholder='Enter Password' type='password'  name='password'/>
      <Form.Input onChange={this.onChange} icon='lock' placeholder='Repeat Password' type='password' name='password1'/>
      <Form.Checkbox label='I agree to the Terms and Conditions'/>
      <Form.Button primary style={{width:'370px'}} type='submit'>Sign Up</Form.Button>
      </Segment>
    </Form>
    <Message>
      <Message.Header>
       Already have an account? <Link to='/login'>Log In</Link>
      </Message.Header>
    </Message>
    </Container>
    </div>
    )
  }
}
 
export default SignUp;