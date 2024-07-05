import React from "react";

const BannerAndForm = () => {
  return (
    <div
      className="relative h-screen bg-center bg-cover"
      style={{ backgroundImage: "url(src/assets/Banner.jpg)" }}
    >
      <div className="absolute inset-0 grid items-center grid-cols-1 p-6 md:grid-cols-12 md:p-0">
        <div className="hidden md:block md:col-span-8"></div>
        <div className="flex items-center justify-center col-span-12 md:col-span-4 md:justify-end">
          <form action="" className="text-[1.5rem] bg-white bg-opacity-70 p-6 rounded-lg shadow-md w-full max-w-md">
            <div className="flex flex-col mb-4">
              <label htmlFor="">
                Name <span className="font-bold text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="bg-transparent placeholder:text-[1.2rem] py-1 px-3 border border-black rounded-2xl"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="">
                Email <span className="font-bold text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your email address"
                className="bg-transparent py-1 placeholder:text-[1.2rem] px-3 border border-black rounded-2xl"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="">
                Contact <span className="font-bold text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your Contact"
                className="bg-transparent placeholder:text-[1.2rem] py-1 px-3 border border-black rounded-2xl"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="">
                Message <span className="font-bold text-red-600">*</span>
              </label>
              <textarea
                className="bg-transparent placeholder:text-[1.2rem] py-1 px-3 border border-black rounded-2xl"
                name=""
                placeholder="Write Your Message"
                id=""
              ></textarea>
            </div>
            <div>
              <button className="w-full px-4 py-1 mt-12 font-bold text-white bg-green-600 rounded-md active:bg-slate-300 active:text-black">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BannerAndForm;
