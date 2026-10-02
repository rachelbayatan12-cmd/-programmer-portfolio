import "./globals.css";
import "./accent.css";
import "./transitions.css";

export const metadata = {
  title: "Rachel Bayatan | Programmer Portfolio",
  description: "Portfolio of an aspiring software developer and IT student."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
