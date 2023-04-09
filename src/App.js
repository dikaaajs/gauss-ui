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

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Members />
    </div>
  );
}

export default App;
