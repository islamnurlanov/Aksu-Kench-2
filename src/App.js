import React,{Component} from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

import {Uslugi} from './Uslugi';
import {Prise} from './Prise';
import {Contacts} from './Contacts';
import {NoMatch} from './NoMatch';
import {Layout} from './components/Layout';
import {NavBar} from './components/Navbar';
import {Jumbotron} from './components/Jumbotron';
import {Akci} from './Akci'
import {Galerai} from './Galerai'
import {Dialog} from './components/Dialog'
class App extends Component {
  render() {
    return (
      
  <React.Fragment>
   
    <NavBar/>
    <Jumbotron/>
    <Layout>
      <Router>
       <Switch>
          <Route path="/"exact component={Uslugi}/>
          <Route path="/prise" component={Prise}/>
          <Route path="/akci" component={Akci}/>
          <Route path="/galerai" component={Galerai}/>
          <Route path="/contacts"component={Contacts}/>
         <Route component={NoMatch}/>
         <Dialog>
    In this video you're going to learn how to create a dialog box /modal window component in react.
        </Dialog>
       </Switch>
     </Router>
    </Layout>
   </React.Fragment>
    );
  }
  
}

export default App;
