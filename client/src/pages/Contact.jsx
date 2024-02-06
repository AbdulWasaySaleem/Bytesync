import React from "react";

const Contact = () => {
  return (
    <>
      <section id="testimonies" className="py-20 bg-slate-900">
        <div className="relative group">
          <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
        </div>
      </section>


      <div className="flex h-screen items-center justify-center p-5 m-4">
          <div className="items-center md:flex-row md:items-stretch gap-10 md:px-10 w-3/4  bg-gray-800 rounded-lg shadow-md p-2">
            {/* Description Section */}
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
              About <span className="text-purple-500">Our Company</span>
            </h2>
            <div className="flex justify-center items-center p-8 bg-red-500">
              {/* Left Section */}
              <div className="p-4 rounded-lg mr-8 bg-red-200 ">
                <p className="text-center text-white">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                  excepturi magnam enim officiis facilis numquam corporis quos
                  accusantium tempora, dolores quod cum facere architecto soluta
                  atque corrupti a alias perferendis. Lorem ipsum dolor sit,
                </p>
              </div>
              {/* Right Section */}
              <div className="flex justify-center items-center bg-red-200">
                <img
                  src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                  alt="About Us Image"
                  className="object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Contact;
