import Navbar from "./Navbar.tsx"
import logo from "../assets/official-retailer-plaque-en.png"
import {Link} from "react-router-dom"
import "./Header.css"
const Header = () =>{
    return(
        <div className="header">
            <Link to={'/'}>
                <img src={logo} className="logo" alt="logo" />
            </Link>
            <Navbar/>
        </div>
    )
}

export default Header;