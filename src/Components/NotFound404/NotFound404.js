import React from "react";
import { useNavigate } from "react-router-dom";
import NotFound from "../../Img/notFound.png";
const NotFound404 = () => {
  const navigate = useNavigate();
  return (
    <div
      className="shadow
    mx-2 mt-2 mb-10 p-1"
    >
      <h4 className="font-bold text-red-500 text-center text-2xl font-gos my-5 ">
        Ops! 404 Not Found
      </h4>
      <img className="w-5/6 sm:w-80 mx-auto" src={NotFound} alt="" />
      <div className="sm:text-center">
        <button
          onClick={() => navigate(-1)}
          className=" mx-1 mt-10 mb-2 font-gos py-1 px-2 rounded bg-red-400 text-white hover:shadow hover:bg-white hover:text-red-400 ease-in-out duration-300 border-red-400"
        >
          Go Back!
        </button>
      </div>
    </div>
  );
};

export default NotFound404;
