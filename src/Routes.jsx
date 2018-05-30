import React from 'react';
import {Switch, Route} from 'react-router';
import HomePage from './components/mains/HomePage';
import SignUp from './components/auth-forms/signup';
import Login from './components/auth-forms/login';
import Profile from './components/profile/Profile';
import ElectronicsList from './components/products/ProductsList';
import WishList from './components/profile/WishList';


export const Routes = () => {
  return(
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/signup' component={SignUp}/>
      <Route path='/profile/category/:id' component={ElectronicsList}/>
      <Route path= '/login' component={Login}/>
      <Route path='/profile/wishlist' component={WishList} />
      <Route path='/profile' component={Profile}/>
      
    </Switch>
  )
}