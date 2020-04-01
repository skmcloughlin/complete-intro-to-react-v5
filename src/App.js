import React from 'react'
import { render } from 'react-dom'
import {Router, Link} from '@reach/router'
import SearchParams from './SearchParams'
import Details from './Details'


const App = () => {

  return (
    <React.StrictMode>
      <div>
        <header>
          <Link to="/"> Adopt Me! </Link>
        </header>
        <Router>
          <Details path="details/:id"></Details>
          <SearchParams path="/" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
