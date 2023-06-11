"use client"


const Hero: React.FC = () => {
  return (
    <div className="h-[60vh] m-4 p-10 relative">
      <div 
        className="hero absolute inset-0 bg-cover bg-center"></div>
        <div className="relative z-10 flex flex-col justify-center items-center gap-4 text-white">
          <h1 className="text-3xl font-bold">Welcome to Mutaiga Mini Mart</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nihil suscipit vitae obcaecati eos asperiores accusantium corrupti laborum fugit aspernatur.
          </p>
          <button className=" bg-blue-500/60 p-4 font-semibold rounded-md w-40">
            Find Out More
          </button>
      </div>
     
      
    </div>
  )
}

export default Hero