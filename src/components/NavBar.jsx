import { useState } from 'react';
import { Link } from "react-router-dom";
// import logo from "../../src/assets/logo-ale.png";

const NavBar = () => {
    const [click, setClick] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => setClick(!click);
    const handleClose = () => setIsOpen(!isOpen);

    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-inner">
                        <div className="navbar-content">
                            <div className="nav-logo text-c">
                                <Link to="/">M&A</Link>
                            </div>
                            <div className="nav-links text-r">
                                <Link to="/">Home</Link>
                                <Link to="/">RSVP</Link>
                                <Link to="/">Info</Link>
                                <Link to="/">Regalo</Link>
                            </div>
                        </div>
                        <div className="menu-icon" onClick={() => { handleClick(); handleClose(); }}>
                            <i className={click ? "fas fa-times" : "fas fa-bars"} />
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <div className="mobile-menu">
                        <Link to="/">Home</Link>
                        <Link to="/">RSVP</Link>
                        <Link to="/">Info</Link>
                        <Link to="/">Regalo</Link>
                    </div>
                )}
            </nav>
        </>
    )
}
export default NavBar
