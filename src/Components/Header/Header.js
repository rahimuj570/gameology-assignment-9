import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="grid grid-cols-1 sm:block text-center px-1 sm:my-10 my-5 ">
      <NavLink
        className={({ isActive }) =>
          (isActive
            ? "shadow px-1 border border-b-8 border-b-indigo-300 rounded bg-sky-50"
            : "") +
          " text-md sm:text-xl sm:mr-3 shadow px-1 py-1 font-gos hover:bg-indigo-50 mb-1 sm:mb-0"
        }
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          (isActive
            ? "shadow px-1 border border-b-8 border-b-indigo-300 rounded bg-sky-50"
            : "") +
          " text-md sm:text-xl sm:mr-3 shadow px-1 py-1 font-gos hover:bg-indigo-50 mb-1 sm:mb-0"
        }
        to={"/reviews"}
      >
        Reviews
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          (isActive
            ? "shadow px-1 border border-b-8 border-b-indigo-300 rounded bg-sky-50"
            : "") +
          " text-md sm:text-xl sm:mr-3 shadow px-1 py-1 font-gos hover:bg-indigo-50 mb-1 sm:mb-0"
        }
        to={"/dashboard"}
      >
        Dashboard
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          (isActive
            ? "shadow px-1 border border-b-8 border-b-indigo-300 rounded bg-sky-50"
            : "") +
          " text-md sm:text-xl sm:mr-3 shadow px-1 py-1 font-gos hover:bg-indigo-50 mb-1 sm:mb-0"
        }
        to={"/blog"}
      >
        Blog
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          (isActive
            ? "shadow px-1 border border-b-8 border-b-indigo-300 rounded bg-sky-50"
            : "") +
          " text-md sm:text-xl sm:mr-3 shadow px-1 py-1 font-gos hover:bg-indigo-50 "
        }
        to={"/about"}
      >
        About
      </NavLink>
    </div>
  );
};

export default Header;
