import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Skill from "./components/Skill";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Skill />
      <Work />
      <Contact />
      
    </div>
  );
}

export default App;