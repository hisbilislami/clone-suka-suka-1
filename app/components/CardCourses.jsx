import React from "react";
import Link from "next/link";
import { FaPenRuler } from "react-icons/fa";

const CardCourses = () => {
  return (
    <>
      <div class="p-2">
        <div class="grid grid-cols-4 gap-default">
          <div class="p-8 grid grid-cols-2 gap-2">
            <div>
              <FaPenRuler />
            </div>
            <div>
              <h4> 0K </h4>
              <p>Online Courses</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardCourses;
