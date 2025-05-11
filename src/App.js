import About from "./components/About";
import Courses from "./components/Courses"
import MainContainer from "./components/MainContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<MainContainer/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/course" element={<Courses/>}/>
          <Route exact path="/gallery" element={<Pricing/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
