
import "../app/ui/globals.css";
import Navbar from "./ui/home/navbar";
import {inter}  from "../app/ui/fonts";
import { Providers } from "./providers";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased font-bold bg-[#222121] text-white`}>
       <Providers> 
          <Navbar/>
          {children}
        </Providers>
        </body>
    </html>
  );
}
