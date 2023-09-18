"use client";
import React from "react";
import Jumbotron from "./components/Jumbotron";
import Top_category from "./components/Top_category";
import Coba from "./components/Coba";
import FeaturedInstructor from "./components/FeaturedInstructor";
import StudentCourse from "./components/StudentCourse";
import Navbar from "./components/Navbar";
import NavbarTest from "./components/NavbarTest";

export default function Home() {
  return (
    <main>
      <Jumbotron />
      <Top_category />
      <Coba />
      <FeaturedInstructor />
      <StudentCourse />
      {/* <Navbar/>
      <NavbarTest /> */}
    </main>
  );
}
