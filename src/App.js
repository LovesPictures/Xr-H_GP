import "./App.css";

// Page/ navigation Routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { MapData } from "./components/Pages/MapData";
import { Contact } from "./components/Pages/Contact";
import { SharedLayout } from "./components/Navigation/SharedLayout";
import { Error } from "./components/Pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* index is parent and content for the index using outlet to render the results */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/mapData" element={<MapData />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/" element={<SharedLayout />} />
        <Route exact path="*" element={<Error />} />
      </Routes>

      {/* position navigation  */}
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
