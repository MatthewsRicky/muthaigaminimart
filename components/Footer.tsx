"use client"

import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai"

const Footer = () => {
  return (
    <div className="w-full p-4 mt`-6 mx-auto bg-blue-950 text-white">
      <div className="flex flex-col w-full md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col gap-4 w-full p-2 border-2 border-opacity-40 rounded-md shadow-md shadow-white/40">
          <h1>Muthaiga Mini Mart</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat inventore praesentium distinctio corporis soluta porro.</p>
        </div>
        <div className="flex flex-col items-center gap-4 w-full p-2 border-2 border-opacity-40 rounded-md shadow-md shadow-white/40">
          <h1 className="text-2xl">Customer Service</h1>
          <p>Our customer service team at the head office is  available to help you.
            Monday-Friday: 8am to 5pm
            Saturday: 8am to 1pm
            Sunday: Closed
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full p-2 border-2 border-opacity-40 rounded-md shadow-md shadow-white/40">
          <h1>Follow us on social media!</h1>
          <h1 className="flex justify-around items-center">
            <AiOutlineFacebook />
            <AiOutlineInstagram />
            <AiOutlineTwitter />
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Footer