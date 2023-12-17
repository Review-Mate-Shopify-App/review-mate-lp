import Footer from "@/(components)/Footer";
import { ourReviews } from "@/utils/constants";
import ReviewCard from "@/(components)/ReviewCard";

export default function Reviews() {
  return (
    <div>
      <div className="my-20">
        <div className="text-center mb-11 text-4xl font-bold text-gray-700">
          Our reviews
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          {ourReviews.map((eachReview, index) => {
            return (
              <div
                key={index}
                className="w-96 h-fit bg-white drop-shadow-xl hover:drop-shadow-2xl rounded-md px-2 py-3"
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
