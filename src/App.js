import React, {useState} from 'react'
import { render } from 'react-dom'
import {Router, Link} from '@reach/router'
import SearchParams from './SearchParams'
import Details from './Details'
import ThemeContext from './ThemeContext'

const App = () => {
  const themeHook = useState("peru")
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/"> Adopt Me! </Link>
          </header>
          <Router>
            <Details path="details/:id"></Details>
            <SearchParams path="/" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
