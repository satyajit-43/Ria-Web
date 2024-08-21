import React from "react";
import p1 from './images/p1.jpg';
import p2 from './images/p2.jpeg';

function Marriage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white w-full max-w-5xl shadow-lg flex">
        <div className="w-[60%] bg-maroon-700 text-white p-6 bg-red-600">
          <h2 className="text-4xl font-bold mb-6 text-left px-4">PERSONAL DETAILS</h2>

          <div className="flex text-left justify-left px-4 gap-5 ">
            <div className="basis-[50%]">
                <p className="font-semibold">Name:</p>
                <p className="font-semibold">Date of Birth:</p>
                <p className="font-semibold">Birth Time:</p>
                <p className="font-semibold">Birth Place:</p>
                <p className="font-semibold">Manglik:</p>
                <p className="font-semibold">Caste/Gotra:</p>
                <p className="font-semibold">Height:</p>
                <p className="font-semibold">Complexion:</p>
                <p className="font-semibold">Marital Status:</p>
                <p className="font-semibold">Education:</p>
                <p className="font-semibold">Occupation:</p>
                <p className="font-semibold">Income/Salary:</p>
                <p className="font-semibold">Job/Business Address:</p>
            </div>
            
            <div>
                <p className="font-semibold">XXXXXXXXX</p>
                <p className="font-semibold">DD-mm-yyyy</p>
                <p className="font-semibold">12:00 am</p>
                <p className="font-semibold">Delhi</p>
                <p className="font-semibold">No</p>
                <p className="font-semibold">Jain digamber/Garg</p>
                <p className="font-semibold">5 feet 10 inch</p>
                <p className="font-semibold">Fair</p>
                <p className="font-semibold">Never Married</p>
                <p className="font-semibold">B.com from Delhi</p>
                <p className="font-semibold">Business</p>
                <p className="font-semibold">12 Lac</p>
                <p className="font-semibold">Delhi NCR</p>
            </div>
          </div>
          
          <h2 className="text-4xl font-bold mt-10 mb-6 text-left px-4">FAMILY DETAILS</h2>
          <div className="flex text-left justify-left px-4 gap-5 mb-6">
          <div className="basis-[50%]">
            <p className="font-semibold">Grandfather:</p>
            <p className="font-semibold">Grandmother:</p>
            <p className="font-semibold">Father Name:</p>
            <p className="font-semibold">Father Occupation:</p>
            <p className="font-semibold">Mother Name:</p>
            <p className="font-semibold">Mother Occupation:</p>
            <p className="font-semibold">Sister:</p>
            <p className="font-semibold">Brother:</p>
            <p className="font-semibold">Tauji/Chachaji:</p>
            <p className="font-semibold">Budget/Status:</p>
          </div>
          <div>
            <p className="font-semibold">Rakesh Jain</p>
            <p className="font-semibold">Businessman</p>
            <p className="font-semibold">Rani Jain</p>
            <p className="font-semibold">Housewife</p>
            <p className="font-semibold">no</p>
            <p className="font-semibold">no</p>
            <p className="font-semibold">XXXXXX</p>
            <p className="font-semibold">yyyyyyy</p>
            <p className="font-semibold">XXXXX</p>
            <p className="font-semibold">B+</p>
          </div>
        </div>
          
          <h2 className="text-4xl font-bold mt-10 mb-6 text-left px-4">MATERNAL DETAILS</h2>
          <div className="flex text-left justify-left px-4 gap-5 mb-6">
          <div className="basis-[50%]">
            <p className="font-semibold">Nana Ji:</p>
            <p className="font-semibold">Mama Ji:</p>
            <p className="font-semibold">Address:</p>
          </div>
          <div>
            <p className="font-semibold">Nxxxxxxx</p>
            <p className="font-semibold">Dxxxxxx</p>
            <p className="font-semibold">D-XX- Street-x Delhi</p>
          </div>
        </div>
          
          <h2 className="text-4xl font-bold mt-10 mb-6 text-left px-4">CONTACT DETAILS</h2>
          <div className="flex text-left justify-left px-4 gap-5 mb-6">
          <div className="basis-[50%]">
            <p className="font-semibold">Residence Add.:</p>
            <p className="font-semibold">Contact No:</p>
            <p className="font-semibold">Whatsapp No:</p>
            <p className="font-semibold">Email:</p>
          </div>
          <div>
            <p className="font-semibold">D-XXX- Street-x Delhi</p>
            <p className="font-semibold">XXXXXXXX</p>
            <p className="font-semibold">xxxxxxx</p>
            <p className="font-semibold">xxxxxx@gmail.com</p>
          </div>
        </div>
          
          <h2 className="text-4xl font-bold mt-10 mb-6 text-left px-4">PREFERENCE / REQ</h2>
          <div className="flex text-left justify-left px-4 gap-5">
          <div className="basis-[50%]">
            <p className="font-semibold">Qualification:</p>
            <p className="font-semibold">State/City:</p>
            <p className="font-semibold">Kundli Match:</p>
            <p className="font-semibold">Other:</p>
          </div>
          <div>
            <p className="font-semibold">Graduation</p>
            <p className="font-semibold">Delhi</p>
            <p className="font-semibold">Yes</p>
            <p className="font-semibold">No</p>
          </div>
        </div>
        </div>


        <div className="w-[40%] bg-white p-6 flex flex-col justify-between">
          <h1 className="text-5xl font-bold text-center mb-4 border-[2px] border-[solid] border-[black]">BIO-DATA</h1>
          <img
            src={p1}
            alt="Person 1"
            className="object-cover mb-1"
          />
          <img
            src={p2}
            alt="Person 2"
            className="object-cover"
          />
          <p className="text-center text-gray-700 mt-4 border-[2px] border-[solid]">Mobile: 99XXXXXXX</p>
        </div>
      </div>
    </div>
  );
}

export default Marriage;

