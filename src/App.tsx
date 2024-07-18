import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";
import BottomNavBar from "./Components/BottomNavBar";

const App: React.FC = () => (
  <div className="app">
    <BrowserRouter>
      <main className="">
        <AppRoutes />
        <BottomNavBar isClient={false} />
      </main>
    </BrowserRouter>
    
  </div>
);

export default App;
