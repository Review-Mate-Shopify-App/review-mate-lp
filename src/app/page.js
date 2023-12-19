"use client";

import Footer from "@/(components)/Footer";
import { benefitsCardDetails } from "@/utils/constants";
import Link from "next/link";
import { useState } from "react";
import GrowBusiness from "../assets/grow_business.svg";
import Image from "next/image";
import AnalyzeReviews from "../assets/analyze-reviews.svg";

function BenefitsCard({ title, description, image }) {
  return (
    <div className="w-72 md:w-80 bg-slate-50 drop-shadow-xl hover:drop-shadow-2xl rounded-md">
      <Image
        className="h-36 md:h-40 w-72 md:w-80 bg-orange-300 rounded-t-md"
        src={image}
        width={80}
        height={40}
        alt="cardImage"
      />
      <div className="text-2xl md:text-3xl text-gray-800 mt-5 md:mt-8 px-5 font-semibold">
        {title}
      </div>
      <div className="mt-4 pb-10 px-5 leading-relaxed">{description}</div>
    </div>
  );
}

export default function LandingPage() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <div className="bg-orange-300 pt-5 flex flex-col-reverse lg:flex-row px-5 lg:pr-0 lg:pl-12 text-black h-[90vh]">
        <div
          id="heroSection"
          className="flex flex-col h-full justify-center text-center items-center lg:text-left lg:items-start lg:ml-16 font-bold text-3xl lg:text-7xl"
        >
          Every review tells a Story...
          <div className="text-base lg:text-xl font-semibold mt-5 lg:mt-10 w-[80%]">
            Our digital marketing platform is helping businesses, just like
            yours, grow faster everyday.
          </div>
          <div className="flex lg:mb-0 mb-7 flex-col md:flex-row justify-center lg:justify-start items-center mt-20 md:h-10 w-full gap-5 md:gap-3">
            <input
              className="rounded-full text-sm font-semibold border border-gray-300 h-10 w-[70%] md:w-[30%] lg:w-[45%] px-3 focus:outline-none focus:border-blue-500 text-black"
              type="text"
              placeholder="my-shop-domain.myshopify.com"
              onChange={(e) => setInputValue(e.target.value)}
            />

            <Link
              href={`https://test-review-ap.myshopify.com/admin/oauth/authorize?client_id=4934c58427211856cfe456e5b638d4fc&scope=read_products,read_orders,read_analytics,read_orders,read_product_feeds,read_product_listings,read_products&redirect_uri=https://17db-2401-4900-1c54-4d84-dde2-a72-3f7-926.ngrok-free.app/review-requests/oauth/callback`}
              className="h-10 border border-white bg-black flex items-center w-fit text-center rounded-full font-semibold text-base text-white px-7 py-1"
            >
              Connect store
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-end mr-16">
          <img
            src="https://bootstrapmade.com/demo/templates/Ninestars/assets/img/hero-img.svg"
            alt="landingPageIllustration"
            className="lg:z-10 w-[90%]"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row mt-16 items-center justify-between">
        <div className="flex items-center justify-center w-full">
          <img
            src="https://bootstrapmade.com/demo/templates/Ninestars/assets/img/about-img.svg"
            alt="landingPageIllustration"
            className="w-[60%] h-[60%]"
          />
        </div>
        <div className="flex flex-col items-center mt-20">
          <div className="text-4xl sm:text-5xl w-[90%] sm:w-[70%] text-gray-700 font-semibold p-2 text-center">
            Google owns 91% of worldwide search
          </div>
          <div className="w-[90%] sm:w-[80%] mt-5 text-lg sm:text-xl text-gray-500 font-semibold text-center">
            Use Review Mate to rank higher and stand out from competitors in
            Google Organic search results and Google Shopping with customer
            review star ratings.
          </div>
        </div>
      </div>

      <div className="w-[80%] mx-auto h-72 shadow-2xl rounded-xl mb-6 mt-28 bg-gray-800">
        <div className="flex justify-between px-8 py-4">
          <div className="">
            <div className="text-white text-4xl pt-3 w-[60%] font-[500px]">
              Enhance your store by analyzing reviews
            </div>
            <div className="mt-5 text-base text-white font-[500px] w-[80%]">
              Our shopify app helps your business to grow exponentially using
              your customer feedback.
            </div>
            <Link
              href="/"
              className="h-10 border mt-7 border-white bg-white flex items-center w-fit text-center rounded-full font-semibold text-base text-black px-7 py-1"
            >
              Connect store
            </Link>
          </div>
          <Image
            className="w-[25%] mt-5 h-52 rounded-2xl"
            src={AnalyzeReviews}
            alt="grow-your-business"
          />
        </div>
      </div>

      <div className="flex mt-16 sm:mt-32 flex-wrap gap-10 sm:gap-20 justify-center mx-5 lg:px-0">
        {benefitsCardDetails.map((benefit, index) => (
          <BenefitsCard
            key={index}
            title={benefit.title}
            description={benefit.description}
            image={benefit.image}
          />
        ))}
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center mb-10 sm:my-20">
        <div className="flex flex-col items-center mt-16 mb-11">
          <div className="text-4xl sm:text-5xl w-[90%] sm:w-[70%] p-2 font-semibold text-gray-700 text-center">
            Grow your business
          </div>
          <div className="w-[85%] sm:w-[75%] mt-5 text-lg sm:text-xl text-gray-500 font-semibold text-center">
            Whether you&apos;re an established local business or an eCommerce
            start-up, Review Mate&apos;s industry-leading features help your
            business stand out from the crowd.
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <Image
            src={GrowBusiness}
            alt="landingPageIllustration"
            className="w-[60%] h-[60%] h-64"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
