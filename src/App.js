import About from "./About";
import Cats from "./Cats";
import Dogs from "./Dogs";
import Home from "./Home";
import NavBar from "./NavBar";
import Register from "./Register.js";

import "./styles.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="container">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/funcat" element={<Cats />} />
            <Route path="/fundog" element={<Dogs />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
