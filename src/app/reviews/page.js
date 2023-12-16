import Footer from "@/(components)/Footer";
import { ourReviews } from "@/utils/constants";
import ReviewCard from "@/(components)/ReviewCard";

export default function Reviews() {
  return (
    <div>
      <div className="mx-auto my-20 w-[60%]">
        <div className="text-center text-4xl font-bold text-blue-800">
          Our reviews
        </div>
        <div className="flex flex-wrap">
          {ourReviews.map((eachReview, index) => {
            return (
              <div
                key={index}
                className="w-[50%] h-fit mt-16 bg-white drop-shadow-lg rounded-md px-2 py-3"
              >
                <ReviewCard
                  author={eachReview.author}
                  review={eachReview.review}
                  rating={eachReview.rating}
                  postedAt={eachReview.postedAt}
                />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
