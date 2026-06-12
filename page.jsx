import "./styles.css";

export const metadata = {
  title: "Huippumyyjän Päivärutiini",
  description: "Päivittäinen harjoitussovellus myynnilliseen itsevarmuuteen"
};

export default function RootLayout({ children }) {
  return (
    <html lang="fi">
      <body>{children}</body>
    </html>
  );
}
