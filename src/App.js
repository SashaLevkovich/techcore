import React, { Fragment } from 'react';

import './App.css';
import Modal from './components/Modal/Modal';
import LocationsPage from './page/LocationsPage';
import CreateLocation from './components/CreateLocation/CreateLocation';

function App() {
  return (
<Fragment>
    <LocationsPage />
    <Modal />
    <CreateLocation />
</Fragment>
  );
}

export default App;
