import About from "./components/About";
import Cats from "./components/Cats";
import Dogs from "./components/Dogs";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Register from "./components/Register";

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
