import React from "react";
import aboutMainImage from "../assets/Images/aboutMainImage.png";
import {celebrities} from "../Constants/CelebrityData"
import HomeLayout from "../layouts/HomeLayout";
import CarouselSlide from "../Components/CarouselSlide";

function AboutUs() {
  

  return (
    <HomeLayout>
      <div className="pl-20 pt-20 flex flex-col text-white">
        <div className="flex items-center gap-5 mx-10">
          <section className="w-1/2 space-y-10">
            <h1 className="text-5xl text-yellow-500 font-semibold">
              Affordable and quality education
            </h1>
            <p className="text-xl text-gray-200">
              Our goal is to provide the affordable and quality to the world. we
              are providing the platform for the aspiring teacher and student to
              share their skills, creativity and knowledge ot each other to
              empower in the growth and wellness of mankind
            </p>
          </section>
          <div className="w-1/2">
            <img
              id="test1"
              src={aboutMainImage}
              className="drop-shadow-2xl"
              alt="about img"
            />
          </div>
        </div>
      </div>

    <div className="carousel w-1/2 my-16 ml-[25%]">
           {celebrities.map((data)=> <CarouselSlide {...data} totalSlide={celebrities.length} key={data.slideNumber}/>)}
    </div>
    </HomeLayout>
  );
}

export default AboutUs;
