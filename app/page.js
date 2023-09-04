import Jumbotron from './components/Jumbotron'
"use client";
import Top_category from "./components/Top_category";
import React from "react";
import Coba from "./components/Coba";
import FeaturedInstructor from "./components/FeaturedInstructor";

export default function Home() {
  return (
    <main>
      <Jumbotron />
      {/* <Coba /> */}
      <Coba />
      <Top_category />
      <FeaturedInstructor />
    </main>
  );
}
