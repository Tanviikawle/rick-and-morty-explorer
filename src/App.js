import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"

import Navbar from "./components/Navbar/Navbar";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Episodes from "./Pages/Episodes";
import CardDetails from "./components/Cards/CardDetails";
import Characters from "./Pages/Characters";
import Home from "./Pages/Home";

function App(){
  return <Router>
    <div className="App">
      <Navbar />
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<CardDetails />} />
      <Route path="/characters" element={<Characters />} />
      <Route path="/episodes" element={<Episodes />} />
      <Route path="/episodes/:id" element={<CardDetails />} />
    </Routes>
  </Router>
}

export default App;
