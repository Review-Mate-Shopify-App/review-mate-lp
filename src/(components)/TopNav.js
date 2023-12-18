"use client";

import Link from "next/link";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function TopNav() {
  const pathname = usePathname();
  const isLandingPage = pathname === "/";
  const [inputValue, setInputValue] = useState("");

  console.log("####", inputValue);
  return (
    <nav
      className={clsx(
        "flex w-full text-white bg-blue-500 py-5 px-8"
        // isLandingPage ? "bg-blue-500" : "bg-[#0E1D34]"
      )}
    >
      <div className="flex justify-between items-center space-x-4 w-full">
        <Link href="/" className="text-lg font-semibold">
          Review Mate
        </Link>
        <div className="flex space-x-3 sm:space-x-12">
          <Link
            href="/blog"
            className={clsx(
              "font-semibold",
              pathname === "/blog" ? "border-b-2 pb-1 border-white" : ""
            )}
          >
            Blog
          </Link>
          <Link
            href="/reviews"
            className={clsx(
              "font-semibold",
              pathname === "/reviews" ? "border-b-2 pb-1 border-white" : ""
            )}
          >
            Our Reviews
          </Link>
          <div className="flex gap-2">
            <input
              className="rounded border border-gray-300 px-3 focus:outline-none focus:border-blue-500 text-black"
              type="text"
              placeholder="Enter something..."
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Link
              className="bg-white text-black rounded-md px-4 py-2 font-semibold border border-gray-300 hover:bg-gray-100 transition duration-300 ease-in-out"
              href={`https://test-review-ap.myshopify.com/admin/oauth/authorize?client_id=4934c58427211856cfe456e5b638d4fc&scope=read_products,read_orders,read_analytics,read_orders,read_product_feeds,read_product_listings,read_products&redirect_uri=https://17db-2401-4900-1c54-4d84-dde2-a72-3f7-926.ngrok-free.app/review-requests/oauth/callback`}
            >
              Connect Store
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
