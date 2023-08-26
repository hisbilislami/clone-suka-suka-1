"use client"
import Image from 'next/image'
import Top_category from './components/Top_category'
import React from 'react'
import Coba from './components/Coba'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'




export default function Home() {
  return (
    <main>
      {/* <Coba /> */}
      <BrowserRouter>
        <Coba />
      </BrowserRouter>
      <Top_category></Top_category>
    </main>
  );
}
