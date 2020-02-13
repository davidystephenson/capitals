import React from 'react';
import { Route, Link } from 'react-router-dom'
import Welcome from './components/Welcome'
import Country from './components/Country'

class App extends React.Component {
  render () {
    const countries = [
      'spain', 'germany', 'poland'
    ]

    const links = countries.map(
      country => <div>
        <Link
          to={`/country/${country}`}
        >
          {country}!!!
        </Link>
      </div>
    )

    console.log('links test:', links)

    return <div>
      <p>Hello world app</p>

      <Route
        exact
        path='/'
        component={Welcome}
      />

      {links}

      <Route
        path='/country/:xyz'
        component={Country}
      />
    </div>
  }
}

export default App;
