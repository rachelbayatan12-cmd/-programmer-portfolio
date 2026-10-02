import "./globals.css";

export const metadata = {
  title: "Alex Rivera | Programmer Portfolio",
  description: "Portfolio of an aspiring software developer and IT student."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
