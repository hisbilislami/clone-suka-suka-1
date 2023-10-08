import Image from "next/image";
import React from "react";

function MasterSkill(){
    return(

        <div className="container  flex mx-auto bg-white w-full bg-white mt-28 mb-18">
            <div class="col-span-3">
                <h6 className="text-[#FF6575] pb-4 font-bold">What's New</h6>
                <h1 className="text-[#002058] pb-4 text-4xl font-bold">
                    Master the skill to drive your career 
                </h1>
                <p className="text-[#685F78] w-3/4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean
                    accumsan bibendum gravida maecenas augue elementum et neque.
                    Suspendisse imperdiet.
                </p>

                <div className="w-full item- justify-content py-24">
                    <Image
                    src="/join.png"
                    width="630"
                    height="653"
                    style={{
                        width: "80%",
                        height: "auto",
                    }}
                    alt="A"
                    ></Image>
                </div>

            </div>


            {/* <div className="grid gap-4 grid-cols-2">
                <div> 1</div>
                <div> 1</div>
                <div> 1</div>
                <div> 1</div>
            </div> */}
        </div>
    );
}

export default MasterSkill;