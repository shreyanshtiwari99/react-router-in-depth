import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>Router</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home></Home>}>
            {" "}
          </Route>
          <Route path="about" element={<About></About>}>
            {" "}
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
