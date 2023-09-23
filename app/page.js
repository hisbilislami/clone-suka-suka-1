"use client"
import React from 'react'
import Trusted from './components/Trusted'
import Jumbotron from "./components/Jumbotron";
import Top_category from "./components/Top_category";
import FeaturedInstructor from "./components/FeaturedInstructor";
import Coba from './components/Coba';
import JoinMentor from "./components/JoinMentor";
import Become from './components/Become';

export default function Home() {
  return (
    <main>
      <Jumbotron />
      <Top_category />
      <Coba />
      <FeaturedInstructor />
      <Trusted />
      <JoinMentor/>
      <Become />
      
    </main>
  );
}
