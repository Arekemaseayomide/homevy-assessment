import { Open_Sans } from "next/font/google";
import "./globals.css";


const openSans = Open_Sans({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "My Homevy Assessment",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
