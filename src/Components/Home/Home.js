import React from "react";
import HomeImg from "../../Img/HomePic.png";

const Home = () => {
  return (
    <div>
      <div className="bg-indigo-400 grid grid-cols-2 justify-between items-center font-bold text-xl py-5">
        <div className="mx-1 text-white text-center">
          <h1 className="sm:text-4xl">Play The Games </h1>
          <h1 className="sm:text-4xl">Know The Games </h1>
          <h1 className="sm:text-4xl">Enjoy The Games </h1>
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
      <div className="border border-4 border-indigo-400 text-center py-10">
        <h4 className="text-2xl font-semibold">Recent Reviews</h4>
        <hr className="w-3/6 mx-auto mt-2" />
      </div>
    </div>
  );
};

export default Home;
