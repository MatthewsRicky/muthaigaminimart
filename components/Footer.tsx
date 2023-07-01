"use client"

import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai"

const Footer = () => {
  return (
    <div className="w-full p-4 mx-auto bg-blue-950 text-white">
      <div className="flex flex-col w-full md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col items-center justify-center gap-4 w-full p-2 px-2 rounded-md shadow-sm shadow-orange-500/90">
          <h1 className="text-xl uppercase">Muthaiga Mini Mart</h1>
          <p className="text-center p-2">Muthatiga Mini Mart: your one-stop shop for fresh local produce, gourmet snacks, everyday essentials, and beach supplies in Diani Beach.</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 w-full p-2 px-2 rounded-md shadow-sm shadow-orange-500/90">
          <h1 className="text-xl uppercase">Customer Service</h1>
          <p className="text-center p-2">Our customer service team at the head office is  available to help you.
            Monday-Friday: 9am to 5pm
            Saturday: 9am to 1pm
            Sunday: Closed
          </p>
        </div>
        <div className="flex flex-col justify-center gap-8 w-full p-2 px-2 rounded-md shadow-sm shadow-orange-500/90">
          <h1 className=" text-xl text-center uppercase">Follow us on social media!</h1>
          <h1 className="flex text-4xl py-2 text-orange-500/90 bg-white  rounded m-2 justify-around items-center">
            <AiOutlineFacebook className="hover:bg-orange-500/90 transition-all duration-300 hover:text-white m-4" />
            <AiOutlineInstagram className="hover:bg-orange-500/90 transition-all duration-300 hover:text-white m-4" />
            <AiOutlineTwitter className="hover:bg-orange-500/90 transition-all duration-300 hover:text-white m-4" />
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Footer