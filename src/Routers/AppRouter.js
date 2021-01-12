import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { AboutMe } from '../components/AboutMe';
import { AppJS } from '../components/AppJS';
import { appReact } from '../components/appReact';
import { Disehos } from '../components/Disehos';
import { Navbar } from '../components/UI/Nav';
import  './styles.css'
export const AppRouter = () => {
    return (
      <>
          <Router>
      
        <Navbar/>

        
        <Switch>
          <Route exact path="/" component={AboutMe}/>
          <Route exact path="/appsjs" component={AppJS}/>
          <Route exact path="/disehos" component={Disehos}/>
          <Route exact path="/react" component={appReact}/>
          <Redirect to="/"/>
        </Switch>
        
    </Router>
        
     </>   
    )
}
