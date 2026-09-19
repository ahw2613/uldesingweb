import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"UL DESIGN — Digital Experiences",description:"브랜드와 비즈니스를 위한 웹사이트 제작 스튜디오"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ko"><body>{children}</body></html>}