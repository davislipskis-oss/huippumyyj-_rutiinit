export const metadata = {
  title: "Huippumyyjän Päivärutiini",
  description: "Ammattimainen päivittäinen harjoitussovellus myynnillisen itsevarmuuden rakentamiseen"
};

export default function RootLayout({ children }) {
  return (
    <html lang="fi">
      <body>{children}</body>
    </html>
  );
}
