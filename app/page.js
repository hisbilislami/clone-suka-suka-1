"use client";
import React from "react";
import Trusted from "./components/Trusted";
import Jumbotron from "./components/Jumbotron";
import Top_category from "./components/Top_category";
import FeaturedInstructor from "./components/FeaturedInstructor";
import StudentCourse from "./components/StudentCourse";
import ChekcoutReview from "./components/ChekcoutReview";
import Coba from "./components/Coba";
import JoinMentor from "./components/JoinMentor";
import Become from "./components/Become";
import Unaccess from "./components/Unaccess";
import LatestBlog from "./components/Latestblog";
import MasterSkill from "./components/MasterSkill";
import Footers from "./components/Footers";

export default function Home() {
  return (
    <main>
      {/* <Jumbotron /> */}
      <Top_category />
      <MasterSkill />
      {/* <Coba />
      <FeaturedInstructor />
      <MasterSkill />
      <ChekcoutReview />
      <Trusted />
      <JoinMentor />
      <Become />
      <LatestBlog />
      <StudentCourse />
      <Unaccess />
      <Footers /> */}
    </main>
  );
}
