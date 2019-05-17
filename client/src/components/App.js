import React from 'react';
import Navbar from './layout/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Landing from './Landing'

function App() {
   return (
      <BrowserRouter>
         <div className="App">
            <Navbar />
            <Switch>
               <Route exact path='/' component={Landing} />
            </Switch>
         </div>
      </BrowserRouter>
   );
}

export default App;
