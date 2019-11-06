import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Routers,Switch,Route} from 'react-router-dom';
import Auth from './helper/Authoriz';
import {Login} from './components/Layouts';
import {Dashboard} from './components/component-main';
import './App.css';
import axios from 'axios';

const axios_config = () => {
  axios.defaults.baseURL = 'http://localhost:3300/api/';
  axios.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    // Do something with request error
    console.log('Error');
    return Promise.reject(error);
  });
}
function App() {
  axios_config();
  return (
   <Routers>
     {/* <Auth layout={EmptyLayout} component={Dashboard} path="/dashboard" exact/> */}
     <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={Dashboard} />
     </Switch>
   </Routers>
  );
}

export default App;
