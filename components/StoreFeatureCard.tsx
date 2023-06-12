"use client"

import ImageCard from "../components/ImageCards"

const StoreFeatureCard = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-8 md:w-[80%] my-20 mx-auto px-10 h-[40vh] overflow-hidden text-blue-900">
      
      <h1 className="text-2xl md:text-3xl lg:6xl font-semibold">WELCOME TO MUTHAIGA MINI MART</h1>
      <p className="bg-blue-200/20 p-4 shadow-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, aspernatur. Vero aperiam quo obcaecati. Rem iure distinctio incidunt unde, facere eius nemo quo deleniti adipisci aperiam nulla quos! Maiores aperiam eaque perferendis, eos deleniti vitae, esse blanditiis odio id consequatur nulla! Repellendus nihil dolorum distinctio delectus soluta eaque quod assumenda ratione voluptatum dolor fuga, ullam iste in. Nobis nesciunt nihil neque libero voluptatem possimus, quia recusandae et necessitatibus non, excepturi ratione amet sunt tenetur magni asperiores. Minima tempore enim amet voluptatibus officiis aspernatur quo odit ipsum, quas velit unde provident dolorum fugiat obcaecati? Officia laudantium odio est beatae obcaecati molestias?</p>
    </div>
    <div className="flex justify-center items-center flex-col md:flex-row gap-4 wrap">
      <ImageCard
       imageSrc="/images/cheese.jpeg"
       title="Cheese"
       description="Wide selection of Cheese"
       />
      <ImageCard
       imageSrc="/images/beverages.jpeg"
       title="Beverages"
       description="All Your Favorite Beverages in one spot"
       />
      <ImageCard
       imageSrc="/images/mmm7.jpeg"
       title="Household Goods"
       description="Fully Stocked Super Market"
       />
      <ImageCard
       imageSrc="/images/bananas.jpeg"
       title="Fruits and Vegetables"
       description="Variety of Fresh Groceries"
       />
    </div>
      
    </div>
  )
}

export default StoreFeatureCard