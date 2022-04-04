import React from "react";
import { BiStar } from "react-icons/bi";

const Review = ({ game }) => {
  const { picture, rating, date, comment } = game;
  return (
    <div className=" shadow bg-sky-50">
      <div className="overflow-hidden mx-2 my-2  rounded shadow w-6/6 h-40 ">
        <img
          className="ease-in-out duration-300 hover:scale-110 w-full h-full object-cover"
          src={picture}
          alt={rating}
        />
      </div>
      <div className=" p-2 ">
        <p className="font-gos">
          <span className="font-semibold">Date:</span> {date}
        </p>
        <p className="flex items-center font-gos">
          <span className="font-semibold">Rating: </span>{" "}
          <span className="text-amber-400 ml-2">{rating}</span>
          <BiStar className="text-amber-400 ml-1" />
        </p>
      </div>
      <p className="rounded-lg m-1 p-2 bg-white mt-2">
        <span className="font-gos">Short Review:</span>{" "}
        <span className="font-pop">{comment}</span>
      </p>
    </div>
  );
};

export default Review;
