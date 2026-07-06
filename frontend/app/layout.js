// import "./globals.css"
// import Navbar from "./component/Navbar"
// import Footer from "./component/Footer"

// export const metadata = {
//   title: "Eric Solutions",
//   description: "AI-powered clinical and data solutions platform",
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <Navbar />
//         {children}
//         <Footer/>
        
//       </body>
//     </html>
//   )
// }




import "./globals.css"
import Navbar from "./component/Navbar"
import Footer from "./component/Footer"
import Script from "next/script"
import LayoutContent from "./LayoutContent";


export const metadata = {
  title: "eRIC SOLUTIONS",
  description: "eRIC SOLUTIONS delivers CTMS, EDC, data management, pharmacovigilance, and clinical research solutions for pharma, biotech, and CROs.",
   alternates: {
    canonical: "https://www.ericsolutions.com/",
  },

   icons: {
    icon: "/browser/favicon.ico",
  },
  verification: {
    google: "lVyfVBfCmZeH4FlRgB3e-AVKKCCynfVkR1209Nb8BJQ",
  },
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar />
        {children}
        <Footer /> */}

        <LayoutContent>
          {children}
        </LayoutContent>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-L6LMSDY5GB"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L6LMSDY5GB');
          `}
        </Script>
      </body>
    </html>
  )
}