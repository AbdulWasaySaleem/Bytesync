import React, { useState, useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./Main.css"; // Assuming you have a CSS file named Main.css for your styles
import Projects from "./Projects";

const Main = () => {
  const [text] = useTypewriter({
    words: ["Bytes Sync"],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <>
      <div className="bg-gray-900">
        <div className="flex h-screen items-center justify-center p-5">
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
                accusantium tempora, dolores quod cum facere architecto soluta
                atque corrupti a alias perferendis. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Aut excepturi magnam enim officiis
                facilis numquam corporis quos accusantium tempora, dolores quod
                cum facere architecto soluta atque corrupti a alias perferendis.
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
        <hr></hr>
        {/* 2nd content */}
        <div className="relative group">
          <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200 "></div>
        </div>
        <div className="flex justify-center ">
          <div className="sm:flex items-center max-w-screen-xl  m-4">
            <div className="sm:w-1/2 p-10">
              <div className="image object-center text-center">
                <img src="https://i.imgur.com/WbQnbas.png" />
              </div>
            </div>
            <div className="sm:w-1/2 p-5">
              <div className="text">
                <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
                  About us
                </span>
                <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
                  About <span className="text-purple-500">Our Company</span>
                </h2>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid, commodi doloremque, fugiat illum magni minus nisi
                  nulla numquam obcaecati placeat quia, repellat tempore
                  voluptatum.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 3rd content */}
        <div>
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-8 text-center">
                🚀 Featured Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {/* Project Card */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src="https://picsum.photos/seed/picsum/400/400"
                    alt="Project Image"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4">Project Title</h3>
                    <p className="text-gray-700">
                      This project is so cool, even my cat approves! 🐱
                    </p>
                    <a
                      href="#"
                      className="block text-blue-600 hover:underline mt-4"
                    >
                      Check it out! 🚀
                    </a>
                  </div>
                </div>
                {/* Repeat for other projects */}
              </div>
            </div>
          </section>
          <div className="bg-black">
            <section
              id="features"
              className="relative block px-6 py-10 md:py-20 md:px-10  border-t border-b border-neutral-900 bg-neutral-900/30"
            >
              <div className="relative mx-auto max-w-5xl text-center">
                <span className="text-gray-400 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
                  Why choose us
                </span>
                <h2 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
                  We Build a Website That Our Customers Love
                </h2>
                <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
                Our web development services encompass the creation of dynamic, user-friendly websites and web applications. From conceptualization to deployment, our team of skilled developers utilizes cutting-edge technologies and best practices to build responsive, scalable, and secure digital experiences.
                </p>
              </div>
              <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
                  <div
                    className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
                    style={{
                      backgroundImage:
                        "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",
                      borderColor: "rgb(93, 79, 240)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-color-swatch"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2" />
                      <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9" />
                      <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12" />
                      <line x1={17} y1={17} x2={17} y2="17.01" />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-gray-400">Customizable</h3>
                  <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                    Tailor your landing page's look and feel, from the color
                    scheme to the font size, to the design of the page.
                  </p>
                </div>
                <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
                  <div
                    className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
                    style={{
                      backgroundImage:
                        "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",
                      borderColor: "rgb(93, 79, 240)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-bolt"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3" />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-gray-400">Fast Performance</h3>
                  <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                    We build our templates for speed in mind, for super-fast
                    load times so your customers never waver.
                  </p>
                </div>
                <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
                  <div
                    className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
                    style={{
                      backgroundImage:
                        "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",
                      borderColor: "rgb(93, 79, 240)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-tools"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" />
                      <line x1="14.5" y1="5.5" x2="18.5" y2="9.5" />
                      <polyline points="12 8 7 3 3 7 8 12" />
                      <line x1={7} y1={8} x2="5.5" y2="9.5" />
                      <polyline points="16 12 21 17 17 21 12 16" />
                      <line x1={16} y1={17} x2="14.5" y2="18.5" />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-gray-400">Fully Featured</h3>
                  <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                    Everything you need to succeed and launch your landing page,
                    right out of the box. No need to install anything else.
                  </p>
                </div>
              </div>
              <div
                className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"
                style={{
                  backgroundImage:
                    "linear-gradient(to right top, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%)",
                  borderColor: "rgba(92, 79, 240, 0.2)",
                }}
              />
              <div
                className="absolute bottom-0 right-0 z-0 h-1/3 w-full"
                style={{
                  backgroundImage:
                    "linear-gradient(to left top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)",
                  borderColor: "rgba(92, 79, 240, 0.2)",
                }}
              />
              <div class=" py-12">
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                  <div class="mx-auto max-w-5xl lg:text-center flex flex-col justify-center items-center">
                    <h2 class="text-base font-semibold leading-7 text-blue-100 bg-blue-600 px-3 rounded-lg uppercase mb-4 lg:mb-8">
                      Key Features
                    </h2>
                    <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-blue-800 to-purple-900">
                      <h1 class="lg:text-7xl text-4xl md:text-5xl font-bold tracking-">
                        Enhanced
                        <span class="">Insurance Solutions</span>
                      </h1>
                    </div>

                    <p class="mt-6 text-md text-gray-300 max-w-lg text-center">
                      Discover the exceptional features of our insurance
                      services designed to streamline processes and provide
                      comprehensive coverage for your needs.
                    </p>
                  </div>
                  <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                      <div class="relative pl-16">
                        <dt class="text-base font-semibold leading-7 text-gray-100">
                          <div class="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-700">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              aria-hidden="true"
                              class="h-6 w-6 text-white"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                              ></path>
                            </svg>
                          </div>
                          Customized Coverage Plans
                        </dt>
                        <dd class="mt-2 text-base leading-7 text-gray-200">
                          Tailor your insurance coverage to match your unique
                          needs. Our customizable plans ensure you only pay for
                          the coverage that matters most to you.
                        </dd>
                      </div>
                      <div class="relative pl-16">
                        <dt class="text-base font-semibold leading-7 text-gray-100">
                          <div class="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-700">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              aria-hidden="true"
                              class="h-6 w-6 text-white"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
                              ></path>
                            </svg>
                          </div>
                          Risk Assessment Expertise
                        </dt>
                        <dd class="mt-2 text-base leading-7 text-gray-200">
                          Benefit from our cutting-edge risk assessment model,
                          providing accurate insights into potential risks and
                          ensuring your coverage aligns with your risk profile.
                        </dd>
                      </div>
                      <div class="relative pl-16">
                        <dt class="text-base font-semibold leading-7 text-gray-100">
                          <div class="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-700">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              aria-hidden="true"
                              class="h-6 w-6 text-white"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              ></path>
                            </svg>
                          </div>
                          Cost-Efficient Premiums
                        </dt>
                        <dd class="mt-2 text-base leading-7 text-gray-200">
                          Experience cost-effective insurance solutions. We keep
                          our premiums competitive, ensuring you receive optimal
                          coverage without breaking the bank.
                        </dd>
                      </div>
                      <div class="relative pl-16">
                        <dt class="text-base font-semibold leading-7 text-gray-100">
                          <div class="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-700">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              aria-hidden="true"
                              class="h-6 w-6 text-white"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                              ></path>
                            </svg>
                          </div>
                          24/7 Customer Support
                        </dt>
                        <dd class="mt-2 text-base leading-7 text-gray-200">
                          Our dedicated support team is available around the
                          clock to assist you. Whether it's day or night, we're
                          here to address your insurance-related queries
                          promptly.
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
              {/* jkasdakdas */}
              <div className="container mx-auto border-t border-b border-neutral-900 bg-neutral-900/30">
          <div className=" p-8 rounded-md shadow-lg">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white">Let's Talk</h1>
            </div>
            <div className="flex w-full">
              <div className=" p-6 rounded-md mb-8 w-1/2">
              <p className="text-gray-300">
              Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project  and provide help.
              </p>
                <h2 className="text-lg font-semibold text-white mb-4">
                  Contact Information
                </h2>
                <div className="grid grid-row-2 gap-4">
                  <div>
                    <h2 className="text-lg font-semibold text-white mb-4">
                      Email
                    </h2>
                    <p className="text-gray-400">example@example.com</p>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-white mb-4">
                      Phone
                    </h2>
                    <p className="text-gray-400">+123 456 7890</p>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-white mb-4">
                      Social Media
                    </h2>
                    <div className="flex space-x-4">
                      <img
                        src="https://img.icons8.com/fluent/30/000000/facebook-new.png"
                        alt="Facebook"
                        className="h-8 w-8"
                      />
                      <img
                        src="https://img.icons8.com/fluent/30/000000/instagram-new.png"
                        alt="Twitter"
                        className="h-8 w-8"
                      />
                      <img
                        src="https://img.icons8.com/fluent/30/000000/twitter.png"
                        alt="Instagram"
                        className="h-8 w-8"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Contact */}
              <div className="w-1/2">
                <form class="ml-auo space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    class="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    class="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    class="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
                  />
                  <textarea
                    placeholder="Message"
                    rows="6"
                    class="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]"
                  ></textarea>
                  <button
                    type="button"
                    class="text-white bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
            </section>
          </div>
          {/* sadasd */}
        </div>

        {/* 4th content */}
       
      </div>
    </>
  );
};

export default Main;
