"use client";

import Link from "next/link";

export default function BlogCard({ id, title, tag, time, image, desc }) {
  return (
    <Link
      href={`/blog/${id}`}
      className="w-72 pb-3 bg-white rounded-md drop-shadow-xl hover:drop-shadow-2xl cursor-pointer"
    >
      <img src={image} alt="store_pic" className="rounded-t-md w-72 h-40" />
      <div className="px-4">
        <div className="text-blue-700 text-lg font-semibold my-2 line-clamp-4">
          {title}
        </div>
        <div className="flex flex-wrap gap-1">
          <div className="text-xs text-gray-400 font-semibold">{tag}</div>
          <div className="text-xs flex items-center justify-center bg-gray-500 text-white rounded-sm px-3 pt-0.5">
            {time}
          </div>
          <div className="text-sm mt-2 line-clamp-4 leading-relaxed">
            {desc}
          </div>
        </div>
      </div>
    </Link>
  );
}
