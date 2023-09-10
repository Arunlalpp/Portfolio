import React from "react";

import Frontend from "../assets/front-end.png";

function Services() {
  return (
    <section id="services">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-blue-900 font-extrabold text-[2.4rem] mb-5">
            What do i help
          </h2>
          <p className="lg:max-w-[600px] lg:mx-auto text-blue-900 font-medium text-base leading-7">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
            voluptatem dolores sed nemo consectetur unde delectus quisquam
            deserunt suscipit ullam perspiciatis labore amet facilis maiores,
            ducimus voluptas totam qui? Commodi?
          </p>
        </div>

        <div className="flex fle-col justify-center md:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 translate -translate-x-1/2"></div>
              <div className="mt-6 sm:mt-0 sm:mb12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        className="bg-white p-4 hover:bg-violet-600 cursor-pointer ease-in duration-150 rounded shadow"
                        data-aos="fade-right"
                        data-aos-duration="1200"
                      >
                        <h3 className="text-violet-700 font-bold mb-3 group-hover:text-white group-hover:font-semibold text-2xl">
                          Frontend Development
                        </h3>
                        <p className="text-sm text-blue-800 group-hover:text-white group-hover:font-semibold">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Exercitationem rerum tempora iure perferendis,
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-violet-500 border-white border-10 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:-translate-y-0 flex items-center place-content-center">
                    <figure>
                      <img src={Frontend} alt="frontend" />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="mt-6 sm:mt-0 sm:mb12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        className="bg-white p-4 hover:bg-violet-600 cursor-pointer ease-in duration-150 rounded shadow"
                        data-aos="fade-left"
                        data-aos-duration="1300"
                        data-aos-delay="50"
                      >
                        <h3 className="text-violet-700 font-bold mb-3 group-hover:text-white group-hover:font-semibold text-2xl">
                          Frontend Development
                        </h3>
                        <p className="text-sm text-blue-800 group-hover:text-white group-hover:font-semibold">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Exercitationem rerum tempora iure perferendis,
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-violet-500 border-white border-10 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:-translate-y-0 flex items-center place-content-center  ">
                    <figure>
                      <img src={Frontend} alt="frontend" />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="mt-6 sm:mt-0 sm:mb12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        className="bg-white p-4 hover:bg-violet-600 cursor-pointer ease-in duration-150 rounded shadow"
                        data-aos="fade-right"
                        data-aos-duration="1400"
                        data-aos-delay="100"
                      >
                        <h3 className="text-violet-700 font-bold mb-3 group-hover:text-white group-hover:font-semibold text-2xl">
                          Frontend Development
                        </h3>
                        <p className="text-sm text-blue-800 group-hover:text-white group-hover:font-semibold">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Exercitationem rerum tempora iure perferendis,
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-violet-500 border-white border-10 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:-translate-y-0 flex items-center place-content-center">
                    <figure>
                      <img src={Frontend} alt="frontend" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
