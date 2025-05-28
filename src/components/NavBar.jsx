import { Link } from "react-router-dom";

function NavBar()
{
    return (
        <>
            
        <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
        <li><Link to="/about" className="hover:text-yellow-400">About Us</Link></li>
        <li><Link to="/contact" className="hover:text-yellow-400">Contact Us</Link></li>
        <li><Link to="/counter" className="hover:text-yellow-400">Counter</Link></li>
        <li><Link to="/count" className="hover:text-yellow-400">Count</Link></li>
  
        </>
    )
}
export default NavBar;



