import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import Album from './pages/Albums';
import Artists from './pages/Artists';
import Tweets from './pages/Tweets';

function App() {
  return (
    <React.Fragment>

      <Navbar />
      <Switch>
        <Route exact path="/">
           <Artists />
        </Route>

      <Route exact path="/album/:id">
           <Album />
        </Route>

        <Route exact path="/tweets">
           <Tweets />
        </Route>
        
      </Switch>

      <Link to="tweets" 
      className="bg-blue-400 rounded-full w-14 h-14 shadow-lg text-white text-2xl fixed bottom-10 right-10 flex justify-center items-center">
       <i className="fa fa-twitter" aria-hidden="true"></i>
      </Link>

    </React.Fragment>
  );
}

export default App;
