
import React, { ReactElement } from 'react'
import { Routes, Route } from 'react-router-dom';
import Generation from './Generation';


function App(): ReactElement {
  return (
     <Routes>
        <Route path="/" element={<Generation  />} />
     </Routes>
  )
}

export default App;