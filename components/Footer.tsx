"use client"

import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai"

const Footer = () => {
  return (
    <div className="w-full p-4 mt`-6 mx-auto bg-blue-950 text-white">
      <div className="flex flex-col w-full md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col items-center justify-center gap-4 w-full p-2 px-2 rounded-md shadow-md shadow-white/40">
          <h1>Muthaiga Mini Mart</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat inventore praesentium distinctio corporis soluta porro.</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 w-full p-2 px-2 rounded-md shadow-md shadow-white/40">
          <h1 className="text-xl uppercase">Customer Service</h1>
          <p className="text-center">Our customer service team at the head office is  available to help you.
            Monday-Friday: 9am to 5pm
            Saturday: 9am to 1pm
            Sunday: Closed
          </p>
        </div>
        <div className="flex flex-col justify-center gap-8 w-full p-2 px-2 rounded-md shadow-md shadow-white/40">
          <h1 className="text-center uppercase">Follow us on social media!</h1>
          <h1 className="flex text-2xl justify-around items-center">
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