// import logo from "./logo.svg";
import "./App.css";
// Map
// import { MapContact } from "./components/MapContact/MapContact";
// Page/ navigation Routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
// import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { MapData } from "./components/Pages/MapData";
import { Ar } from "./components/Pages/Ar";
import { Posters } from "./components/Pages/Posters";
import { Gallery } from "./components/Pages/Gallery";
import { Contact } from "./components/Pages/Contact";
import { SharedLayout } from "./components/Navigation/SharedLayout";
import { Error } from "./components/Pages/Error";

// https://www.youtube.com/watch?v=59IXY5IDrBA&ab_channel=freeCodeCamp.org
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* index is parent and content for the index using outlet to render the results */}
        {/* <Route index element={<Home />} /> */}
        {/* <Route exact path="/" element={<Home />} /> */}
        <Route exact path="/about" element={<About />} />
        <Route exact path="/mapData" element={<MapData />} />
        <Route exact path="/ar" element={<Ar />} />
        <Route exact path="/posters" element={<Posters />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/" element={<SharedLayout />} />
        <Route exact path="*" element={<Error />} />
      </Routes>

      {/* <div>
      <MapContact />
    </div> */}

      {/* position navigation  */}
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
