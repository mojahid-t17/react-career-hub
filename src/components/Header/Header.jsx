import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [theme,setTheme]=useState('light');
  
  // update state on toggle
  const handlToggle=e=>{
    if(e.target.checked){
      setTheme('dark')
    }
    else{
      setTheme('light')
    }
  }
  // console.log(theme)
  // set the theme in localstorage and update
   useEffect(()=>{
       localStorage.setItem('theme',theme);
       const savedTheme=localStorage.getItem('theme');
       document.querySelector('html').setAttribute('data-theme',savedTheme);
   },[theme])
  const listIem = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/statistics">Statistics</NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'text-primary font-bold' : 'font-bold'
          }
        to="/jobs">Jobs</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive })=>isActive ? 'text-primary font-bold' : 'font-bold'} to="/appliedJobs">Applied Jobs</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
      <li>
        <label className="flex cursor-pointer gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <input
             onChange={handlToggle}
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 sssss border-b-2 py-5">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {listIem}
            </ul>
          </div>
          <a className="btn btn-ghost text-5xl">Career Hub</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{listIem}</ul>
        </div>
        <div className="navbar-end">
          <button>
            <a className="bg-purple-400 px-3 py-2 rounded text-white mb-7 hover:bg-purple-500 ">
              Start Applying
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
