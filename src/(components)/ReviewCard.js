import Image from "next/image";

import ProfilePic from "../assets/profile_pic.png";

export default function ReviewCard({ author, review, rating, postedAt }) {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex justify-between items-center mb-2">
        {[...Array(5)].map((_, index) => {
          return (
            <svg
              key={index}
              className={`h-4 w-4 fill-current ${
                index <= rating ? "text-yellow-500" : "text-gray-400"
              } cursor-pointer`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 1l2.39 6.53h6.11l-4.95 4.26L15.61 19 10 15.27 4.39 19l1.07-6.21L1 7.53h6.11L10 1z" />
            </svg>
          );
        })}
        <span className="text-gray-400 text-xs">{postedAt}</span>
      </div>
      <span className="line-clamp-4">{review}</span>
      <div className="flex items-center mt-5">
        <div className="h-7 w-7 rounded-full mr-4">
          <Image className="rounded-full" alt="profile-pic" src={ProfilePic} />
        </div>
        <div>{author}</div>
      </div>
    </div>
  );
}
