export const metadata = {
  title: "Päivärutiini – Huippumyyjä",
  description: "Päivittäinen huippumyyjä-rutiini"
};

export default function RootLayout({ children }) {
  return (
    <html lang="fi">
      <body>{children}</body>
    </html>
  );
}
