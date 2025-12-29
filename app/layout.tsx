import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import './style.css';
import { describe } from "node:test";
import { once } from "events";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ajeet Kumar Yadav Portfolio",
  description: "Ajeet Kumar Yadav Front-End-Developer Delhi/Noida",
};

export default function RootLayout(
  
  {
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

 
  
  return (
    <html lang="en">
      <head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
	<title>{`${metadata.title}`}</title>
  <meta  name="description" content={`${metadata.description}`}/>
	  

    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css?ver=5.3.2" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" />
	<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.3/animate.min.css' />
    <link href="https://kit-pro.fontawesome.com/releases/v5.11.2/css/pro.min.css?ver=5.3.2" rel="stylesheet" type="text/css" />
	<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
 <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css" />
 
  
</head>	
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        {children}
         <script>
       AOS.init({

});
  </script>
      </body>
    </html>
  );
}
