import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-center px-1 my-10">
      <NavLink
        className={({ isActive }) =>
          (isActive
            ? "shadow px-1 border border-b-8 border-b-indigo-300 rounded bg-sky-50"
            : "") + " text-md sm:text-xl mr-3 shadow px-1  py-1"
        }
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          (isActive
            ? "shadow px-1 border border-b-8 border-b-indigo-300 rounded bg-sky-50"
            : "") + " text-md sm:text-xl mr-3 shadow px-1 py-1"
        }
        to={"/reviews"}
      >
        Reviews
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          (isActive
            ? "shadow px-1 border border-b-8 border-b-indigo-300 rounded bg-sky-50"
            : "") + " text-md sm:text-xl mr-3 shadow px-1 py-1"
        }
        to={"/dashboard"}
      >
        Dashboard
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          (isActive
            ? "shadow px-1 border border-b-8 border-b-indigo-300 rounded bg-sky-50"
            : "") + " text-md sm:text-xl mr-3 shadow px-1 py-1"
        }
        to={"/blog"}
      >
        Blog
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          (isActive
            ? "shadow px-1 border border-b-8 border-b-indigo-300 rounded bg-sky-50"
            : "") + " text-md sm:text-xl mr-3 shadow px-1 py-1"
        }
        to={"/about"}
      >
        About
      </NavLink>
    </div>
  );
};

export default Header;
