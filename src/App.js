import React from 'react';
import { Provider } from 'react-redux';
import store from "./redux/storeConfig";

import './App.css';
import RatesTable from "./components/rates-table/RatesTable";

function App() {

  return (
    <Provider store={store}>
      <RatesTable/>
    </Provider>
  );
}

export default App;
