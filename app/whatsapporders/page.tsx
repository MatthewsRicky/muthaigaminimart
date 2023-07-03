import Image from "next/image"
import { FaWhatsappSquare } from "react-icons/fa"


const WhatsappOrders = () => {
  return (
    <div className="h-full md:h-full flex flex-col justify-center items-center">
      <div className="hero bg-cover bg-center bg-no-repeat Flex w-full justify-around items-center mb-10 relative">
        <h1 className="absolute top-1/3 py-4 px-6 rounded-md shadow-md shadow-orange-500/90 text-4xl md:text-6xl lg:text-8xl text-orange-500/90 bg-blue-950/80 mx-[15%] transition-all duration-300">WhatsApp Orders</h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-6 p-8 mx-2 my-4 text-blue-950 bg-blue-950/40 md:max-w-[90%]">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-blue-950 font-bold">Order from Home</h1>
       
        <p className="text-xl font-semibold md:text2xl">
        You can now order your groceries, household items, electronics and other supermarket shopping via WhatsApp. The process is quite simple:
        </p>
        <ul className="py-4">
          <li>
            <p className="text-xl font-semibold md:text2xl">Send your shopping list to the WhatsApp number below. Include the item description and quantity.</p>
             <div className="p-4 m-6 flex justify-around gap-10 items-center hover:scale-105 font-bold">
          <FaWhatsappSquare className="w-32 h-32 md:w-20 md:h-20 text-green-600/95 " />
          <h1 className="text-2xl md:text-3xl">
            WhatsApp Number : +254 720 000 000
          </h1>
        </div>
          </li>
          <li>
            <p className="text-xl font-semibold md:text2xl">Specify your full names and exact location ( area, road/ street, estate, house/apt number).</p>
          </li>
          <li>
            <p className="text-xl font-semibold md:text2xl">We will do the picking, packing and you can choose to either collect or we deliver to you via Little Cabs</p>
          </li>
          <li>
            <p className="text-xl font-semibold md:text2xl">Delivery fees for a 0-15km ksh 50 (Nairobi, Nyali Only), 11-15kms ksh 380.</p>
          </li>
        </ul>
        
        <h3 className="font-bold text-xl w-fit text-blue-950 bg-white/20 rounded-md p-4">
          Terms and Conditions:
        </h3>
        <ul>
          <li>
            <p className="text-xl font-semibold md:text2xl">
              All payments including delivery fees should be paid to Chandarana Foodplus ONLY via MPESA. Kindly confirm your final bill before payment as there are no refunds</p>
          </li>
          <li>
            <p className="text-xl font-semibold md:text2xl">
              Delivery is one way, for any returns kindly visit the branch for a credit note which is redeemable at that branch and cannot be used to place another WhatsApp order.</p>
          </li>  
        </ul>
      </div>
    </div>
  )
}

export default WhatsappOrders