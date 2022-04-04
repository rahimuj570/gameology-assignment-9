import React from "react";
import { Link } from "react-router-dom";
import HomeImg from "../../Img/HomePic.png";
import useFakeData from "../../Utilize/useFakeData";
import Review from "../Reviews/Review";
import { MdMoreTime } from "react-icons/md";

const Home = () => {
  const data = useFakeData();
  return (
    <div>
      <div className="bg-indigo-400 grid grid-cols-2 justify-between items-center font-bold text-xl py-5">
        <div className="mx-1 text-white text-center">
          <h1 className="font-pop sm:text-4xl">Play The Games </h1>
          <h1 className="font-pop sm:text-4xl">Know The Games </h1>
          <h1 className="font-pop sm:text-4xl">Enjoy The Games </h1>
          <p className="sm:mt-6 mt-3 sm:text-xl text-sm font-normal pl-5 md:text-center text-left">
            In this website you will find the reviews of popular video games.
            <br />
            And we will give you the latest news about games.
          </p>
        </div>
        <div className="flex justify-center">
          <img className="" src={HomeImg} alt="" />
        </div>
      </div>
      <div className="border-4 border-indigo-400  py-10">
        <h4
          className="text-center text-2xl font-semibold font-gos
        "
        >
          Recent Reviews
        </h4>
        <hr className="w-3/6 mx-auto mt-2" />
        <div className="grid gap-6 mx-3 my-5 sm:grid-cols-3 grid-cols-1">
          {data.slice(2, 5).map((game) => (
            <Review game={game} key={game.id} />
          ))}
        </div>
        <div className="sm:w-2/6 w-5/6 mx-auto text-center  mb-4">
          <Link
            className="flex items-center justify-center bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 font-semibold text-xl "
            to="/reviews"
          >
            Show More Reviews{" "}
            <MdMoreTime className="text-2xl ml-1 sm:ml-0 sm:basis-10" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
