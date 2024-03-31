
import "../app/ui/globals.css";
import Navbar from "./ui/home/navbar";
import {inter}  from "../app/ui/fonts";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased font-bold bg-[#222121] text-white`}>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
