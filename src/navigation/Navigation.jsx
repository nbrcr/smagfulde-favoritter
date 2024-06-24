import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='navbar'>
      <div className='burger-menu' onClick={toggleMenu}>
        {isOpen ? <IoClose /> : <GiHamburgerMenu />}
      </div>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li>
          <NavLink to='/' onClick={toggleMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' onClick={toggleMenu}>
            Om
          </NavLink>
        </li>
        <li>
          <NavLink to='/recipes' onClick={toggleMenu}>
            Opskrifter
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
