import "@fontsource/inter";

    import React, { ReactElement } from "react";
    import { Routes, Route } from "react-router-dom";
    import GenerationWrapper from "./GenerationWrapper";
    import BuyExample from "./components/ion/BuyExample";

    function App(): ReactElement {
      return (
        <Routes>
          <Route path="/" element={<GenerationWrapper />} />
          <Route path="/buy" element={<BuyExample />} />
        </Routes>
      );
    }

    export default App;
