"use client"
import React from 'react'
import Trusted from './components/Trusted'
import Jumbotron from "./components/Jumbotron";
import Top_category from "./components/Top_category";
import FeaturedInstructor from "./components/FeaturedInstructor";
import StudentCourse from "./components/StudentCourse";
import ChekcoutReview from "./components/ChekcoutReview";
import Coba from './components/Coba';
import JoinMentor from "./components/JoinMentor";
import Become from './components/Become';
import Unaccess from './components/Unaccess';
import LatestBlog from './components/Latestblog';
<<<<<<< HEAD
import MasterSkill from './components/MasterSkill';
=======
>>>>>>> 2c1571355650ec26c8da7b50d3ffa3ec02b78136
import Footers from './components/Footers';

export default function Home() {
  return (
    <main>
      <Jumbotron />
      <Top_category />
      <Coba />
      <FeaturedInstructor />
      <MasterSkill/>
      <ChekcoutReview />
      <Trusted />
      <JoinMentor/>
      <Become />
      <LatestBlog/>
      <StudentCourse />
      <Unaccess />
      <Footers/>
      
    </main>
  );
}
