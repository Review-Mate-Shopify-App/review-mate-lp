"use client";

import Link from "next/link";

import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function TopNav() {
  const pathname = usePathname();
  const isLandingPage = pathname === "/";

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
        </div>
      </div>
    </nav>
  );
}
