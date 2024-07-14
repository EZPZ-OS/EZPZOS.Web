import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/signup/SignupPage";

const App: React.FC = () => (
  // other pages can directly put Route paths and elements as below, easy to test and render //
  <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Home />}/> */}
      <Route path="signup" element={<SignupPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
