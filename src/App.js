import "./index.css";
import { Link, NavLink } from "react-router-dom";
import Header from "./components/header";
import aboutBG from "./assets/about.svg";
import About from "./components/about";

// assets
import dot from "./assets/dot.svg";
import members from "./assets/peepsmembers.svg";
import Home from "./components/home";
import Members from "./components/members";
import Works from "./components/works";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Members />
      <Works />
    </div>
  );
}

export default App;
