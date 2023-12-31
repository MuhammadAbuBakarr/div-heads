import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
 title: "Div Heads | Web Design and Development",
 description: "Welcome to our Web Development Services | Expert Solutions for Your Online Success",
};

export default function RootLayout({ children }) {
 return (
  <html lang="en">
   <head>
    <title>{metadata.title}</title>
    <meta name="description" content={metadata?.description} />
   </head>
   <body className={inter.className}>{children}</body>
  </html>
 );
}
