import Image from "next/image";

import ProfilePic from "../assets/profile_pic.png";

export default function ReviewCard({ author, review, rating, postedAt }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        Rating
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
