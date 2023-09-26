"use client";
import React from "react";
import Jumbotron from "./components/Jumbotron";
import Top_category from "./components/Top_category";
import Coba from "./components/Coba";
import FeaturedInstructor from "./components/FeaturedInstructor";
import JoinMentor from "./components/JoinMentor";
import LatesBlog from "./components/LatesBlog";

export default function Home() {
  return (
    <main>
      <Jumbotron />
      <Top_category />
      <Coba />
      <FeaturedInstructor />
      <JoinMentor/>
      <LatesBlog/>
    </main>
  );
}
