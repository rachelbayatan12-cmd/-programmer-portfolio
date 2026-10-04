import "./globals.css";
import PageTransition from "../components/PageTransition";

export const metadata = {
  title: "Rachel Bayatan | Programmer Portfolio",
  description: "Portfolio of an aspiring software developer and IT student."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
