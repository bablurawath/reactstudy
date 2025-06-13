import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Counters from "./Counters";
import Counter from "./Counter";
import Post from "./Post";
import Users from "./Users";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <AboutUs /> },
  { path: "/contact", element: <ContactUs /> },
  { path: "/counter", element: <Counters /> },
  { path: "/count", element: <Counter /> },
  { path: "/post", element: <Post /> },
  { path: "/users", element: <Users /> },
];

export default routes;
