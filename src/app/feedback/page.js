"use client";

import Footer from "@/(components)/Footer";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Feedback() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const params = useSearchParams();
  const productName = params.get("product_name");

  const handleStarClick = (value) => {
    if (value === rating) {
      setRating(0);
    } else {
      setRating(value);
    }
  };
  console.log(rating);

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  return (
    <div className="flex flex-col justify-evenly">
      <div className="text-center mt-7">
        <div className="text-center text-3xl font-bold text-gray-700">
          Write a review and give us rating.
        </div>
        <div className="mt-10">
          <div className="flex justify-center">
            <img
              src="https://rukminim2.flixcart.com/image/832/832/kv9urgw0/headphone/z/k/d/airdopes-131-boat-original-imag87pw3zehzswb.jpeg?q=70"
              alt="purchased-product"
              className="w-52 h-52"
            />
          </div>
          <div className="text-xl text-gray-700 mt-5 font-semibold">
            Boat wireless earbuds
          </div>
          <div className="flex mt-12 justify-center">
            {[...Array(5)].map((_, index) => {
              const starValue = index + 1;
              return (
                <svg
                  key={index}
                  onClick={() => handleStarClick(starValue)}
                  className={`h-10 w-10 fill-current ${
                    starValue <= rating ? "text-yellow-500" : "text-gray-400"
                  } cursor-pointer`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 1l2.39 6.53h6.11l-4.95 4.26L15.61 19 10 15.27 4.39 19l1.07-6.21L1 7.53h6.11L10 1z" />
                </svg>
              );
            })}
          </div>
          <div className="text-lg font-semibold mb-5 mt-2 text-gray-700">
            Rate the product out of 5 starts
          </div>
          <div className="flex justify-center">
            <textarea
              placeholder="Write a review..."
              value={review}
              onChange={handleReviewChange}
              className="mt-4 px-4 py-2 border border-gray-300 rounded-md resize-y w-[60%] h-60"
            />
          </div>
          <div className="flex justify-center mb-8">
            <Link
              href={`https://localhost:3000/backend?review=${review}&rating=${rating}`}
              className="text-lg cursor-pointer mt-10 bg-yellow-500 flex items-center justify-center text-black font-semibold w-40 h-10 rounded-full"
            >
              Submit
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
