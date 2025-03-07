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
            <nav className="z-1 bg-transparent text-secondary fixed w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-24">
                        <div className="flex flex-row w-full justify-around">
                            <div className="text-3xl font-[Caprasimo]">
                                <Link to="/">A&M</Link>
                            </div>
                            <div className="hidden lg:block">
                                <div className="flex font-[Roboto] text-xl ml-6 items-baseline space-x-8">
                                    <Link className="hover:border-b" to="/">Home</Link>
                                    <Link className="hover:border-b" to="/">RSVP</Link>
                                    <Link className="hover:border-b" to="/">Info</Link>
                                </div>
                            </div>
                        </div>
                        <div className="menu-icon" onClick={() => {handleClick(); handleClose()}}>
                            <i className={click ? "fas fa-times" : "fas fa-bars"} />
                        </div>
                    </div>
                </div>

                {
                    isOpen && (
                        <div className="flex flex-col bg-secondary text-primary gap-y-2 lg:hidden px-4 sm:px-6 pb-2">
                            Links
                        </div>
                    )
                }
            </nav>
        </>
    )
}
export default NavBar
