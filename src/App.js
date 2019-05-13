import React,{Component} from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

import {Home} from './Home';
import {About} from './About';
import {Contacts} from './Contacts';
import {NoMatch} from './NoMatch';
import {Layout} from './components/Layout'
import {NavBar} from './components/Navbar'
import {Jumbotron} from './components/Jumbotron'
class App extends Component {
  render() {
    return (
  <React.Fragment>
    <NavBar/>
    <Jumbotron/>
    <Layout>
      <Router>
       <Switch>
          <Route path="/"exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contacts"component={Contacts}/>
         <Route component={NoMatch}/>
       </Switch>
     </Router>
    </Layout>
   </React.Fragment>
    );
  }
  
}

export default App;
