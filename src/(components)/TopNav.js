import Link from "next/link";

export default function TopNav() {
  return (
    <nav className="flex w-full bg-gray-100 py-5 px-8">
      <div className="flex justify-between items-center space-x-4 w-full">
        <Link href="/" className="text-lg font-semibold">Review Mate</Link>
        <div className="flex space-x-12">
          <Link href="/blog" className=" font-semibold">Blog</Link>
          <Link href="/reviews" className=" font-semibold">Our Reviews</Link>
          <Link href="/ticket-page/new" className=" font-semibold">Pricing</Link>
          <Link href="/ticket-page/new" className=" font-semibold">Login</Link>
        </div>
      </div>
    </nav>
  );
}
