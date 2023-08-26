import React from 'react'
import Image from 'next/image';



const Jumbotron = () => {
  return (
 
  <div
    className="bg-snow relative"
    style={{ height: "150vh", overflow: "hidden" }}
  >
    <div className="container">
      <div className="flex">
        <div className="w-full self-center px-28 py-44">
          <h1 className="text-base text-davysgray text-xl">
            The Leader in Online Learning
          </h1>
          <h2 className="text-base font-semibold text-ungu">
            <span className="block font-bold text-5xl mt-7">
              {" "}
              Engaging &{" "}
            </span>
            <span className="block font-bold text-5xl mt-2">
              Accessible Online{" "}
            </span>
            <span className="block font-bold text-5xl mt-2">
              {" "}
              Courses For All
            </span>
          </h2>
        

          <div className="py-16">
            <form action="">
            <div className="absolute left-32 py-4 flex items-center pr-3 pointer-events-none ">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-bittersweet">
                <path 
                  fill-rule="evenodd" 
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" 
                  clip-rule="evenodd" />
              </svg>
              
              <div className="absolute px-96 py-4 flex items-center pr-3 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-11 h-11 text-bittersweet">
                  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clip-rule="evenodd" />
                </svg>

              </div>

              </div>

              <input
                type="text"
                name="search"
                placeholder="Search School, Online eductional centers, etc"
                autoComplete="off"
                className="px-28 py-4 font-semibold placeholder-gray-400 text-black rounded-3xl border-none"
              />
              

            </form>
          </div>

          
          <p className="text-base  text-davysgray text-xl">
            Trusted by over 15K Users
            <br /> worldwide since 2022
          </p>

          <div class="trust-rating d-flex align-items-center">
            <div class="rate-head">
              <h2>
                <span className="block font-bold text-5xl mt-2 text-ungu">0+ 4.5
                
                </span>
                

              
              </h2>
              
            </div>
            
        
          </div>
          
        </div>
        <div className="w-full self-center flex justify-center ">
          <Image
            className="mt-6"
            src="/a.png"
            width="630"
            height="653"
            style={{
              width: "380px",
              height: "380px",
            }}
            alt="A"
            
          ></Image>
        </div>

        

      </div>
    </div>
  </div>
);
}

export default Jumbotron
