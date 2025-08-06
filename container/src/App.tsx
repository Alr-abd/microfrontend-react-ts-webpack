import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import First from "./First";
import Second from "./Second";


const App: React.FC = () => {
  return (

    <div style={{height: "100vh"}}>
              <BrowserRouter>
    <Routes>
      <Route path="/" element={<First />} />
      <Route path="/home" element={<Second />} />
    </Routes>
  </BrowserRouter>

    </div>
  );
};

export default App;
