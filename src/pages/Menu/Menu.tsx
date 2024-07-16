import React from "react";
import BottomNavBar from "../../Components/BottomNavBar";

const Home: React.FC = () => (
  <div className="home">
    <h2 className="text-3xl text-center">This is Menu Page</h2>
    <p className="text-center">
      Welcome to EZPZ.OS! Please scan the QR code on your table to start
      ordering.
    </p>
    <BottomNavBar />
  </div>
);

export default Home;
