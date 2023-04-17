import "../index.css";
import { Link, NavLink } from "react-router-dom";
import Header from "../components/header";
import About from "../components/about";
import Home from "../components/home";
import Members from "../components/members";
import Works from "../components/works";

function Homepage() {
  return (
    <div className="Homepage">
      <Header />
      <Home />
      <About />
      <Members />
      <Works />
    </div>
  );
}

export default Homepage;
