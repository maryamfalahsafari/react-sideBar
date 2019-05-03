import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faKey, faHome, faAddressBook, faArrowAltCircleLeft, faAmbulance, faAnchor } from '@fortawesome/free-solid-svg-icons'

import Header from './components/header';
import SideBar from './components/sideBar';
import Home from './components/home';
import AboutUs from './components/aboutUs';
import ContactUs from './components/contactUs';
import SideBar2 from './components/sideBar2'

library.add(faEnvelope, faKey, faHome, faAddressBook, faArrowAltCircleLeft, faAmbulance, faAnchor);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuClose: false
    }
  }
  render() {
    return (
      <div className="container-fluid" style={{ height: '100%' }}>

        {/* <Header /> */}
        <div className="row" style={{ height: '36rem' }}>
          <BrowserRouter>
            <SideBar menuClose={this.state.menuClose}
              toggleMenu={() => {
                let temp = !this.state.menuClose;
                this.setState({ menuClose: temp });
              }} />
            <Switch>
              <Route exact path='/' component={() => {
                return (<Home menuClose={this.state.menuClose} />);
              }} />
              <Route path='/aboutUs' component={() => {
                return (<AboutUs menuClose={this.state.menuClose} />);
              }} />
              <Route path='/contactUs' component={() => {
                return (<ContactUs menuClose={this.state.menuClose} />);
              }} />
            </Switch>
          </BrowserRouter>
        </div>

      </div>
    );
  }
}

export default App;
