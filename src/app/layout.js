import "./scss/mains.scss";

export const metadata = {
  title: "Datawise | RWInfotech",
  description: "Created by thecyberjerry",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
