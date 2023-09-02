"use client";
import Top_category from "./components/Top_category";
import React from "react";
import Coba from "./components/Coba";
import FeaturedInstructor from "./components/FeaturedInstructor";

export default function Home() {
  return (
    <main>
      {/* <Coba /> */}
      <Coba />
      <Top_category />
      <FeaturedInstructor />
    </main>
  );
}
