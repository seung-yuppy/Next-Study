import React from "react"
import Navigation from "../components/navigation"
import { Metadata } from "next"
import "../styles/global.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Loading...",
  },
  description: 'The best movies on the best framework',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}

// 레이아웃은 RootLayout을 기준으로 계속 중첩된다.
// <RootLayout>
//  <AboutUsLayout>
//    <CompanyLayout>
//      <JobsLayout>
//        <SalesLayout>
//          <Sales />
//        </SalesLayout>
//      </JobsLayout>
//    </CompanyLayout>
//  </AboutUsLayout>
// </RootLayout>

// 하지만 상위폴더를 부르면 하위폴더 레이아웃은 불러오지 않는다.
// <RootLayout>
//  <AboutUsLayout>
//    <AboutUs />
//  </AboutUsLayout>
// </RootLayout>