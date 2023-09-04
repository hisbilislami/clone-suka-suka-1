"use client";
import React from "react";
import Jumbotron from "./components/Jumbotron";
import Top_category from "./components/Top_category";
import Coba from "./components/Coba";
import FeaturedInstructor from "./components/FeaturedInstructor";

export default function Home() {
  return (
    <main>
      <Coba />
      <Jumbotron />
      <Top_category />
      <FeaturedInstructor />
    </main>
  );
}
