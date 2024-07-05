import React from "react";

function ImageAndtext() {
  return (
    <div className="grid items-center justify-center grid-cols-1 gap-10 px-4 py-10 mx-auto md:grid-cols-2 md:py-28 md:gap-32">
      <div className="flex justify-center">
        <div className="w-40 md:w-[18rem]">
          <img src="assets/Character.png" alt="Character" />
        </div>
      </div>
      <div className="px-4 text-center md:text-left">
        <h2 className="font-extrabold text-[2.5rem] md:text-[5rem]">Adventure</h2>
        <div className="flex flex-col gap-5 max-w-[30rem] mx-auto md:mx-0">
          <p>
            If you attend an adventure film festival, or read a few travel
            books, or follow any Instagram feeds with inspiring photos overlaid
            with pithy quotes, then you will have heard people pontificating
            about the definition of adventure and what the word means to them.
          </p>
          <p>
            Beyond the clichés, however, I find that it can be quite a tricky
            question
          </p>
          <p>
            If you are looking to plan a journey of your own it is definitely
            worth asking yourself the question. The answer you settle on can
            help illuminate the direction that your plans should go.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ImageAndtext;
