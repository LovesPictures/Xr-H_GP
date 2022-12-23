// Navlink
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        About
      </NavLink>

      <NavLink
        to="/products"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Products
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Login
      </NavLink>
    </nav>
  );
};

// <Route index element={<Home />} />
//     <Route exact path="/about" element={<About />} />
//     <Route exact path="/mapData" element={<MapData />} />
//     <Route exact path="/ar" element={<Ar />} />
//     <Route exact path="/posters" element={<Posters />} />
//     <Route exact path="/gallery" element={<Gallery />} />
//     <Route exact path="/contact" element={<Contact />} />
//     <Route exact path="/" element={<SharedLayout />} />
//     <Route exact path="*" element={<Error />} />
// export default Navbar;
