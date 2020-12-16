/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from "react-router-dom";
import PAGES from "./route_constants";

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <a className='navbar-brand' href='#'>
        Navbar
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNavDropdown'
        aria-controls='navbarNavDropdown'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNavDropdown'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <NavLink className='nav-link' to={PAGES.home} exact={true}>
              Profile
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to={PAGES.profile}>
              Contacts
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to={PAGES.dayjs}>
              Convert Time
            </NavLink>
          </li>
          <li className='nav-item dropdown'>
            <a
              className='nav-link dropdown-toggle'
              href='#'
              id='navbarDropdownMenuLink'
              role='button'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              Dropdown link
            </a>
            <div
              className='dropdown-menu'
              aria-labelledby='navbarDropdownMenuLink'
            >
              <a className='dropdown-item' href='#'>
                Action
              </a>
              <a className='dropdown-item' href='#'>
                Another action
              </a>
              <a className='dropdown-item' href='#'>
                Something else here
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
