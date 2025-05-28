import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Counters from "./Counters";
import Counter from "./Counter";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <AboutUs /> },
  { path: "/contact", element: <ContactUs /> },
  { path: "/counter", element: <Counters /> },
  { path: "/count", element: <Counter /> },
];

export default routes;
