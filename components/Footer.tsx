"use client"

import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai"

const Footer = () => {
  return (
    <div className="w-full p-4 mt-6 mx-auto bg-blue-500/60">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 flex-1">
        <div className="flex flex-col gap-4 w-[33%] p-2 bg-white/30 rounded-md shadow-xl">
          <h1>Muthaiga Mini Mart</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat inventore praesentium distinctio corporis soluta porro.</p>
        </div>
        <div className="flex flex-col gap-4 w-[33%] p-2 bg-white/30 rounded-md shadow-xl">
          <h1>Customer Service</h1>
          ontacts
        </div>
        <div className="flex flex-col gap-4 w-[33%] p-2 bg-white/30 rounded-md shadow-xl">
          <h1 className="">
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