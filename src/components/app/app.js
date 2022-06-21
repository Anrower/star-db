import React, { useState } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import PeoplePage from '../pages/people.page';
import PlanetsPage from '../pages/planet-page';
import StarshipsPage from '../pages/starship-page';
import WelcomePage from '../pages/welcome-page';
import StarshipDetails from '../sw-components/starship-details';
import { SwapiServiceProvider } from '../swapi-service-context';

import './app.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {

  const [service, setService] = useState({ swapiService: new SwapiService() })

  const onServiceChange = () => {
    setService(({ swapiService }) => {

      const Service = swapiService instanceof SwapiService ?
        DummySwapiService : SwapiService;

      return {
        swapiService: new Service()
      };
    });
  };

  return (
    <ErrorBoundry>
      <SwapiServiceProvider value={service} >
        <Router>
          <div className="stardb-app">
            <Header onServiceChange={onServiceChange} />
            <RandomPlanet />
            <Routes>

              <Route path='/' element={<WelcomePage />} />
              <Route path='/people' element={<PeoplePage />} />
              <Route path='/planets' element={<PlanetsPage />} />
              <Route path='/starships' exact element={<StarshipsPage />}>
                <Route path='/starships/:id'
                  render={({ match }) => {
                    console.log(match);
                    return <StarshipDetails />
                  }} />
              </Route>

            </Routes>

          </div>
        </Router>
      </SwapiServiceProvider>
    </ErrorBoundry>
  );
}

export default App;