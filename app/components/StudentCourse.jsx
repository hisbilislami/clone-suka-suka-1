import React from 'react'
import { PiUserCirclePlusFill } from "react-icons/pi";
import { PiBookOpenTextDuotone } from "react-icons/pi";
import { PiGlobeDuotone } from "react-icons/pi";

function StudentCourse() {
  return (
    <div className="container mx-auto relative bg-gradient-to-r from-[#a1c4fdc9] to-[#c2e9fb5c] w-full h-36 my-20 rounded-3xl">
      <div class="grid grid-cols-3 gap-4 ">
        <div class="py-8 pl-12">
          <div class="grid grid-cols-3 gap-4 ">
            <div class="bg-white rounded-lg flex justify-center items-center h-20">
              <PiUserCirclePlusFill className="text-xl text-[#fcb900] text-center w-16 h-16" />
            </div>
            <div class="col-span-2">
              <h6 className="font-bold text-4xl mb-2">253,085</h6>
              <p className="text-[#685f78] text-xl">Students Enrolled</p>
            </div>
          </div>
        </div>
        <div class="py-8 pl-12">
          <div class="grid grid-cols-3 gap-4 ">
            <div class="bg-white rounded-lg flex justify-center items-center h-20">
              <PiBookOpenTextDuotone className="text-xl text-[#cf2e2e] text-center w-16 h-16" />
            </div>
            <div class="col-span-2">
              <h6 className="font-bold text-4xl mb-2">252</h6>
              <p className="text-[#685f78] text-xl">Total Course</p>
            </div>
          </div>
        </div>
        <div class="py-8 pl-12">
          <div class="grid grid-cols-3 gap-4 ">
            <div class="bg-white rounded-lg flex justify-center items-center h-20">
              <PiGlobeDuotone className="text-xl text-[#9b51e0] text-center w-16 h-16" />
            </div>
            <div class="col-span-2">
              <h6 className="font-bold text-4xl mb-2">127</h6>
              <p className="text-[#685f78] text-xl">Countries</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentCourse
