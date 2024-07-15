import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
// import "tailwindcss/tailwind.css";

const App: React.FC = () => (
  <div className="app">
    <BrowserRouter>
      <NavBar />
      <main className="p-4">
        <AppRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  </div>
);

export default App;
