"use client";

import Link  from "next/link";

const About = () => {
  return (
      <div 
      className="hero text-white ">
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-6xl">Muthatiga Mini Mart</h2>
          <div className="">
            
            <p className="text-xl md:text-2xl lg:text-3xl font-semi-bold">
              Muthatiga Mini Mart is a beloved destination in the heart of Diani Beach, a stunning coastal paradise. Our mini super market caters to the diverse needs of residents and visitors alike. Offering an extensive range of products and services, from locally sourced fresh produce to gourmet snacks and beach essentials, we strive to meet every customer's needs. With a friendly and inviting atmosphere, Muthatiga Mini Mart is dedicated to providing exceptional customer service, ensuring a convenient and enjoyable shopping experience in the vibrant Diani Beach community.
            </p>
            <Link href="/contact">
            <button className="bg-orange-500/80 p-4 mt-10 text-2xl md:text-3xl lg:text-4xl scale-75 md:scale-90 lg:scale-100 font-semibold transition hover:scale-105 hover:outline-2 rounded-lg w-100">
              Talk to Us
            </button>
            </Link>
          </div>
        </div>
      </div>
    );
}

export default About