import React, { useState, useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./Main.css"; // Assuming you have a CSS file named Main.css for your styles

const Main = () => {
  const [text] = useTypewriter({
    words: ["Bytes Sync"],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div className="flex h-screen items-center justify-center bg-gray-900 p-5">
      <div
        className="flex flex-col items-center gap-10 md:px-10 w-3/4 h-2/3"
        style={{
          boxShadow: "8px 5px 10px 5px purple",
          borderRadius: "15px",
        }}
      >
        {/* main content */}
        <div className="flex flex-col justify-center items-center h-screen text-center m-2 p-2 ">
          <h1 className="mb-2 text-3xl font-bold text-white">
            <span className="text-purple-500">{text}</span>
            <span className="text-red-500">
              {" "}
              <Cursor />
            </span>
          </h1>

          <p className="mb-6 text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
            excepturi magnam enim officiis facilis numquam corporis quos
            accusantium tempora, dolores quod cum facere architecto soluta atque
            corrupti a alias perferendis. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Aut excepturi magnam enim officiis
            facilis numquam corporis quos accusantium tempora, dolores quod cum
            facere architecto soluta atque corrupti a alias perferendis.
          </p>

          <div className="flex justify-center space-x-5">
            <button className="flex items-center justify-center gap-1 rounded-2xl bg-rose-500 p-5 py-3 font-semibold text-white hover:bg-rose-700">
              Contact Now!
            </button>
          </div>
          <div className="flex justify-center space-x-5 m-4 ">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
