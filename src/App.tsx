import "@fontsource/inter";

import React, { ReactElement } from "react";
import { Routes, Route } from "react-router-dom";
import GenerationWrapper from "./GenerationWrapper";

function App(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<GenerationWrapper />} />
    </Routes>
  );
}

export default App;
