import React from 'react';
import Layout from './components/layout/layout'
import { BurgerBuilder } from './containers/BurgerBuilder/BurgerBuilder';

function App() {
  return (
    <div>
      <Layout/>
      <BurgerBuilder></BurgerBuilder>
    </div>
  );
}

export default App;
