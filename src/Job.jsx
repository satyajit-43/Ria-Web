import React from "react";
import profileImage from './images/profile.jpg';

function Job() {
  return (
      <div className="bg-white md:w-full flex flex-col md:flex-row "> 
        <div className="w-[100%] md:w-[30%]  md:h-[100vh]">
          <img
            src={profileImage}
            alt="John Smith"
            className="object-cover overflow-hidden w-full lg:h-full sm:h-[50vh] md:h-[100vh]"
          />
        </div>


        <div className="w-[60%] p-6 md:h-[100vh] m-auto">
          <h1 className="text-4xl font-bold text-[#cd5f4b] mb-4 text-center">JOHN SMITH</h1>

          <div className="mb-16 mt-16 text-start">
            <h2 className="text-lg font-semibold text-brown-700 mb-2 text-center text-[#cd5f4b]">ABOUT ME</h2>

            <div className="flex md:gap-[140px] justify-center gap-[80px]">
                <div>
                    <p className="font-semibold text-[#d34d4d7e]" >Date of Birth:</p>
                    <p className="font-semibold text-[#d34d4d7e]" >Height:</p>
                    <p className="font-semibold text-[#d34d4d7e]" >Education:</p>
                    <p className="font-semibold text-[#d34d4d7e]" >Hobbies:</p>
                    <p className="font-semibold text-[#d34d4d7e]" >Mobile no:</p>
                    <p className="font-semibold text-[#d34d4d7e]" >Nationality:</p>
                    <p className="font-semibold text-[#d34d4d7e]" >Income:</p>
                </div>

                <div>
                    <p>06-07-1993</p>
                    <p>6'5"</p>
                    <p>BSc.IT,MCA</p>
                    <p>Modeling, Singing</p>
                    <p>+0 123-456-789</p>
                    <p>Indian</p>
                    <p>590k</p>
                </div>
            </div>
          </div>


          <div className="mb-6 md:max-w-[400px] m-auto">
            <h2 className="text-lg font-semibold text-brown-700 mb-2 text-[#cd5f4b]">FAMILY BACKGROUND</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>

          <div className="md:max-w-[400px] m-auto">
            <h2 className="text-lg font-semibold text-brown-700 text-[#cd5f4b]">EXPECTATION</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore
            </p>
          </div>
        </div>
      </div>

  );
}

export default Job;
