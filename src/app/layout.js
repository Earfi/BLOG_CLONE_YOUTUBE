import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { ThemeContextProvider } from "../context/ThemeContext";
import "./globals.css";
import { Inter } from "next/font/google";
import ThemeProvider from "../providers/ThemeProvider";
import AuthProvider from "@/providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog App",
  description: "The best blog app!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <div className={inter.className}>
        <AuthProvider>
          <ThemeContextProvider>
            <ThemeProvider>
              <div className="container">
                <div className="wrapper">
                  <Navbar />
                  {children}
                  <Footer />
                </div>
              </div>
            </ThemeProvider>
          </ThemeContextProvider>
        </AuthProvider>
      </div>
    </html>
  );
}
