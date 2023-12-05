import './Navbar.css'
import json2mq from 'json2mq';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'usehooks-ts'

function generateLinks(navLinks: string[][]) {
    return navLinks.map((link) => {
        return (
            <div className="nav-item">
                <Link className="nav-link" to={`/filter?`+link[1]} reloadDocument>{link[0]}</Link>
            </div>
        )
    })

}
const Navbar = () => {
    const mobile = useMediaQuery(
        json2mq({
          maxWidth: 767,
        }),
      );
    const navLinks = [["All Items", 'filter=all'], ["Daydate", "filter=Day-Date"], ["Datejust Pearl", "filter=Date Just Pearl"], ["Date Just", "filter=Date Just"]];
    return (
        !mobile ? 
        <nav className="navbar">
            {generateLinks(navLinks)}
            
        </nav> : <nav className="navbar">
            <div className='dropdown'>
                Menu
                <div className='dropdown-content'>{generateLinks(navLinks)}</div>
            </div>
        </nav>
    );
}

export default Navbar;