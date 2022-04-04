import React from "react";
import useFakeData from "../../Utilize/useFakeData";
import Footer from "../Footer/Footer";
import Review from "./Review";

const Reviews = () => {
  const data = useFakeData();
  return (
    <div className="mb-10 gap-6 mx-5 grid-cols-2 grid md:grid-cols-3">
      {data.map((game) => (
        <Review key={game.id} game={game} />
      ))}
    </div>
  );
};

export default Reviews;
