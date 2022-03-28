import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';
import SEO from './Components/Pages/SEO';
import Benefits from './Components/Pages/Benefits';
import Testimonial from './Components/Pages/Testimonial';
import Outsource from './Components/Pages/Outsource';
import './App.css';

function App() {
  return (
    <div> 
      {/* {console.log('navbar')} */}
      <Navbar />
      {/* <Home/> */}
    
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route exact path="/Components/Pages/SEO" component={SEO} />
        <Route exact path="/Components/Pages/benefits" component={Benefits} />
        <Route exact path="/Components/Pages/testimonial" component={Testimonial} />
        <Route exact path="/Components/Pages/Outsource" component={Outsource} />
      </Switch>
     
    </div> 
  );
}

export default App;
