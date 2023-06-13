

const About = () => {
  return (
      <div
        style={{
          backgroundImage: `url(${"/images/mmm3.jpeg"})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
       }}  
        className="flex flex-col justify-around gap-4 items-center h-[75vh] py-20 px-20 w-full bg-cover text-white">
          <div className="bg-blue-950/60 flex flex-col px-6 py-4 justify-around gap-8">
            <h2 className="text-3xl md:text-4xl">Muthatiga Mini Mart</h2>
            <p className="text-2xl md:text-3xl font-semi-bold">
              Muthatiga Mini Mart is a beloved destination in the heart of Diani Beach, a stunning coastal paradise. Our mini super market caters to the diverse needs of residents and visitors alike. Offering an extensive range of products and services, from locally sourced fresh produce to gourmet snacks and beach essentials, we strive to meet every customer's needs. With a friendly and inviting atmosphere, Muthatiga Mini Mart is dedicated to providing exceptional customer service, ensuring a convenient and enjoyable shopping experience in the vibrant Diani Beach community.
            </p>
          </div>
        
      </div>
    );
}

export default About