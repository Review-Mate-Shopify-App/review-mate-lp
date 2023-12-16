import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "@/(components)/TopNav";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Helpful Crowd",
  description: "Where every review tells a story",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen max-h-screen">
          <TopNav />
          <div className="flex-grow overflow-y-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
