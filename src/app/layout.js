import "./globals.css";


export const metadata = {
  title: "Landrup Dans",
  description: "Landrup Dans",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body className="antialiased bg-[#5E2E53]">
        {children}
      </body>
    </html>
  );
}
