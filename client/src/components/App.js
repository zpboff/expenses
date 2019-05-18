import React from 'react';
import Navbar from './layout/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Landing from './Landing'
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';

function App() {
   return (
      <BrowserRouter>
         <div className="App">
            <Navbar />
            <Switch>
               <Route exact path='/' component={Landing} />
               <Route exact path='/signin' component={SignIn} />
               <Route exact path='/signup' component={SignUp} />
            </Switch>
         </div>
      </BrowserRouter>
   );
}

export default App;
