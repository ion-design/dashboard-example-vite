import React, { ReactElement } from 'react'
    import { Routes, Route } from 'react-router-dom';
    import Generation from './Generation';
    import BuyExample from './components/ion/BuyExample';

    function App(): ReactElement {
      return (
        <Routes>
          <Route path="/" element={<Generation />} />
          <Route path="/buy" element={<BuyExample />} />
        </Routes>
      )
    }

    export default App;
