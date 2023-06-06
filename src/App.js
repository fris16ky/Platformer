import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import UnityGame from "./components/pages/UnityGame";
import Collectibles from "./components/pages/Collectibles";

function App() {
  return (
    <>
      {/* Contains our pages/paths */}
      <Router basename="/Platformer">
        <Navbar />
        <Routes>
          {/* path="/" is to send Home */}
          <Route path="/Platformer" exact Component={Home}></Route>
          <Route path="/Platformer/UnityGame" exact Component={UnityGame} />
          <Route
            path="/Platformer/Collectibles"
            exact
            Component={Collectibles}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
