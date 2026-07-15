import {useState} from "react";
import {navLinks} from "../constants/index.js";

// Added closeMenu parameter so clicking a link shuts the mobile menu
const NavItems = ({ closeMenu }) => {
    return (
        <ul className="nav-ul">
            {navLinks.map(({id, href, name}) => (
                <li key={id} className="nav-li">
                    <a href={href} className="nav-li_a" onClick={closeMenu}>
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    )
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prevState) => !prevState);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <a href={import.meta.env.BASE_URL} className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                        Hassan
                    </a>

                    {/* Updated with BASE_URL for menu.svg & close.svg */}
                    <button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus:outline-none flex sm:hidden" aria-label="Toggle Menu">
                        <img
                            src={isOpen ? `${import.meta.env.BASE_URL}assets/close.svg` : `${import.meta.env.BASE_URL}assets/menu.svg`}
                            alt="toggle"
                            className="w-6 h-6"
                        />
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="sm:flex hidden">
                        <NavItems />
                    </nav>
                </div>
            </div>

            {/* Mobile Navigation Sidebar */}
            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="p-5">
                    <NavItems closeMenu={closeMenu} />
                </nav>
            </div>
        </header>
    )
}
export default Navbar