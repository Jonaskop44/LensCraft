import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import AuthContext from "./context/AuthContext";
import ToasterContext from "./context/ToasterContext";
import IPContext from "./context/IPContext";

const inter = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Drohne",
  description: "Website where you can buy dronevideos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          <ToasterContext />
          <IPContext>{children}</IPContext>
        </AuthContext>
      </body>
    </html>
  );
}
