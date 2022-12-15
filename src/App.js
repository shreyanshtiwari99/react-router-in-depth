import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Link,
  NavLink,
  createRoutesFromElements,
} from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About";

//layouts
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home></Home>}>
        {" "}
      </Route>
      <Route path="about" element={<About></About>}>
        {" "}
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
