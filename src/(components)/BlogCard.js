import Image from "next/image";

import StorePic from "../assets/store_pic.png";

export default function BlogCard({ title, tag, time, desc }) {
  return (
    <div className="w-72 pb-3 bg-white rounded-md drop-shadow-md">
      <Image src={StorePic} alt="store_pic" className="rounded-t-md" />
      <div className="px-4">
        <div className="text-blue-700 text-lg font-semibold my-2 line-clamp-4">
          {title}
        </div>
        <div className="flex flex-wrap gap-1">
          <div className="text-xs text-gray-400 font-semibold">
            {tag}
          </div>
          <div className="text-xs flex items-center justify-center bg-gray-500 text-white rounded-sm px-3 pt-0.5">
            {time}
          </div>
          <div className="text-sm mt-2 line-clamp-4 leading-relaxed">
            {desc}
          </div>
        </div>
      </div>
    </div>
  );
}
