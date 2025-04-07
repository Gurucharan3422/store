import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "PLP Task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

