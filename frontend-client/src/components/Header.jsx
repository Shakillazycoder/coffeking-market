import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {
  const navLinks = (
    <>
    <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/addProduct'>Add Product</NavLink>
      </li>
      <li>
        <NavLink to='/myProduct'>My product</NavLink>
      </li>
    </>
  );


  const {user} = useContext(AuthContext)
 console.log(user);



  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box gap-5 w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">Coffee King</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-5 px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
              title={user.displayName}
            >
              <div className="w-10 rounded-full">
                {user.photoURL ? (
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL}
                  />
                ) : (
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <h2>{user.email}</h2>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login" className="btn bg-[#0dcdbd] text-white">
            Login
          </Link>
        )}
      </div>
      </div>
    </div>
  );
};

export default Header;
