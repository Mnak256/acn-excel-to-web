import Header from "@/components/Header/Header";
import "./globals.css";

export const metadata = {
  title: "TestCaseXcel",
  description: "Test Case Generation Tool",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <footer>Footer</footer>
      </body>
    </html>
  );
}
