import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';


// Pages
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Inquiry from './pages/Inquiry';
import ThankYou from './pages/ThankYou';

// Components
import Navbar from './components/Navbar';



function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/inquiry" component={Inquiry} />
        <Route exact path="/thankyou" component={ThankYou} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;