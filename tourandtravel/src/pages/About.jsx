import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
            Welcome to our website! We are a group of passionate students who came together to create this platform. Our mission is to share knowledge, inspire creativity, and build a space where everyone can learn, explore, and connect.

            This website is a result of our teamwork, dedication, and desire to make a difference. As students, we aim to bring fresh perspectives and innovative ideas to the table while continuously improving and growing along the way.

          </p>
          <br />
          <p>
            Thank you for visiting, and we hope you find value and inspiration here!
          </p>
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;
