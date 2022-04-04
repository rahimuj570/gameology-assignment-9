import React from "react";
import { BsQuestionOctagon } from "react-icons/bs";

const Blog = () => {
  return (
    <div className="mx-5 mb-10">
      <div className="flex items-center">
        <BsQuestionOctagon className="basis-10 font-semibold text-xl" />{" "}
        <p className="font-semibold text-xl">What is Context API?</p>
      </div>
      <p className="pl-5 text-md">
        Context API is a useful React's Hook. <br />
        React is Unidirectional. That's why, if we want to pass a data from a
        parent component to a child component, we can easily do that. <br />
        But if we try to pass the data from a child to a parent, then we'll face
        some problem. <br />
        Even you can not directly pass the data from a parent component to a
        secondary child Components <br /> To do this, we must pass the data to
        his primary child component, then we can pass the data from the primary
        child to the secondary child. <br />
        But in this case, Context API allow us to directly pass the data from a
        parent component to his secondary child Components without pass the data
        from the primary child.
      </p>
      <div className="mt-10 flex items-center">
        <BsQuestionOctagon className="basis-10 font-semibold text-xl" />
        <p className="font-semibold text-xl">
          What is Difference Between Inline and Block Element?
        </p>
      </div>
      <p className="pl-5 text-md">
        Inline element and Block element is HTML display value. <br />
        Block element take the full width of screen <br />
        Otherhand Inline element take only his content width. <br />
        <u>"p","div","Section","Footer"</u>, etc is most common block element.{" "}
        <br />
        <u>"span", "Small", i, a,</u> etc is most common inline element.
      </p>
    </div>
  );
};

export default Blog;
