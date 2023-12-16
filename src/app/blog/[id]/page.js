import Image from "next/image";

import ProfilePic from "../../../assets/profile_pic.png";
import { blogData } from "@/utils/constants";
import Footer from "@/(components)/Footer";

export default function Blog({ params }) {
  const postId = params.id;
  const blogPost = blogData.filter((blog) => blog.id === Number(postId));

  return (
    <div>
      <div className="w-[60%] mx-auto mt-14">
        <div className="text-3xl font-bold">
          8 helpful growth hacks for eCommerce stores in 2023
        </div>
        <div className="text-lg text-gray-500 font-semibold mt-3">
          EMAIL MARKETING
        </div>
        <div className="flex mt-5">
          <div className="h-10 w-10 rounded-full mr-4">
            <Image
              className="rounded-full"
              alt="profile-pic"
              src={ProfilePic}
            />
          </div>
          <div>
            <div className="font-semibold">John Lee</div>
            <div className="text-xs font-semibold text-gray-400">
              <span>2 mins read</span>
              <span className="mx-2">·</span>
              <span>4 days ago</span>
            </div>
          </div>
        </div>
        <div className="mt-10 whitespace-pre-line mb-14">
          {blogPost[0].postData}
        </div>
      </div>
      <Footer />
    </div>
  );
}
