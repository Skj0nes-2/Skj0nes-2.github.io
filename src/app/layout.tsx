import "~/styles/globals.css";

import { type Metadata } from "next";
import { Comfortaa } from "next/font/google";
import { Header, Footer } from "~/components/Main";
import { FadeIn } from "~/lib/animations";

export const metadata: Metadata = {
  title: "Skj0nes-2",
  description: "My github profile site.",
  icons: [{ rel: "icon", url: "/profile.png" }],
};

const comfortaa = Comfortaa({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={comfortaa.className}>
      <body className="bg-white dark:bg-[#191728] text-black dark:text-white flex flex-col">
        <FadeIn>
        <Header />
        <div className="flex grow">
          {children}
        </div>
        <Footer />
        </FadeIn>
      </body>
    </html>
  );
}
