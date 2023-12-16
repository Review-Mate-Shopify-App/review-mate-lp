import Link from "next/link";

export default function TopNav() {
  return (
    <nav className="flex w-full p-4">
      <div className="flex justify-between items-center space-x-4 w-full">
        <Link href="/">Helpful Crowd</Link>
        <div className="flex space-x-4">
          <Link href="/ticket-page/new">Blog</Link>
          <Link href="/ticket-page/new">Our Reviews</Link>
          <Link href="/ticket-page/new">Pricing</Link>
          <Link href="/ticket-page/new">SIGNIN</Link>
        </div>
      </div>
    </nav>
  );
}
