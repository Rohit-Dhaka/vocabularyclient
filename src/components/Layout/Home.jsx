import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <header className="h-[90vh] flex items-center">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">

          
          <h1 className="text-4xl md:text-[52px] font-bold font-rubik max-w-[700px] leading-tight">
            Build Powerful Vocabulary, One{" "}
            <span className="text-[#4F2CBC]">Word at a Time</span>
          </h1>

          
          <p className="text-[#575757] pt-6 max-w-[773px] text-lg">
            Vocabify is a smart vocabulary management platform designed for
            learners who want to improve English fluency, crack interviews,
            and communicate confidently.
          </p>

          
          <div className="flex flex-col sm:flex-row gap-4 pt-10">
            <Link
              to="/features"
              className="font-rubik text-white bg-[#4F2CBC] font-semibold py-4 px-10 rounded-full hover:bg-[#3a1f9e] transition duration-300"
            >
              Explore Features
            </Link>

            <Link
              to="/signup"
              className="font-rubik text-[#4F2CBC] bg-white border border-[#4F2CBC] font-semibold py-4 px-10 rounded-full hover:bg-[#4F2CBC] hover:text-white transition duration-300"
            >
              Start Learning
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Home;
