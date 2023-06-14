import Image from "next/image"


const WhatsappOrders = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="hero bg-cover bg-center bg-no-repeat Flex w-full justify-around items-center mb-10 relative">
        <h1 className="absolute top-1/3 text-4xl md:text-6xl lg:text-8xl text-white mx-[15%]">WhatsApp Orders</h1>
      </div>
      <div className="flex flex-col justify-center gap-6 p-8 mx-2 my-4 text-white bg-blue-950/40 md:max-w-[90%]">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-blue-950">Order from Home</h1>
        <p>
        You can now order your groceries, household items, electronics and other supermarket shopping via WhatsApp from all our branches countrywide.  The process is quite simple:
        </p>
        <ul>
          <li>
            <p>Send your shopping list to any of the below WhatsApp numbers. Include the item description and quantity.</p>
          </li>
          <li>
            <p>Specify your full names and exact location ( area, road/ street, estate, house/apt number).</p>
          </li>
          <li>
            <p>We will do the picking, packing and you can choose to either collect or we deliver to you via Little Cabs</p>
          </li>
          <li>
            <p>Delivery fees for a 0-15km ksh 50 (Nairobi, Nyali Only), 11-15kms ksh 380.</p>
          </li>
        </ul>
        
        <h3>
          Terms and Conditions:
        </h3>
        <ul>
          <li>
            <p>
              All payments including delivery fees should be paid to Chandarana Foodplus ONLY via MPESA. Kindly confirm your final bill before payment as there are no refunds</p>
          </li>
          <li>
            <p>
              Delivery is one way, for any returns kindly visit the branch for a credit note which is redeemable at that branch and cannot be used to place another WhatsApp order.</p>
          </li>  
        </ul>
      </div>
    </div>
  )
}

export default WhatsappOrders