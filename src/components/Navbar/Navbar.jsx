import { NavLink } from "react-router-dom";
import "../Active/Active.css";


const Navbar = () => {
    
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul id="sidebar" tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <NavLink to={"/"}><a className="hover:border">Home</a></NavLink>
                    <NavLink to={'/listedBook'}><a className="hover:border">Listed Book</a></NavLink>
                    <NavLink to={'/readToPage'}><a className="hover:border">Read To Page</a></NavLink>
                     <NavLink to={'/about'}><a className="hover:border">About Us</a></NavLink>
                    <NavLink to={'/contract'}><a className="hover:border">Contract Us</a></NavLink>
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul id="sidebar" className="menu text-xl mt-4 font-semibold gap-8 menu-horizontal px-1">
                    <NavLink to={"/"}><a className="hover:border">Home</a></NavLink>
                    <NavLink to={'/listedBook'}><a className="hover:border">Listed Book</a></NavLink>
                    <NavLink to={'/readToPage'}><a className="hover:border">Read To Page</a></NavLink>
                    <NavLink to={'/about'}><a className="hover:border">About Us</a></NavLink>
                    <NavLink to={'/contract'}><a className="hover:border">Contract Us</a></NavLink>
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <a className="btn btn-success">Sign In</a>
                <a className="btn lg:btn hidden btn-error">Sign Up</a>
            </div>
        </div>
    );
};

export default Navbar;