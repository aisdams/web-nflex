import './global.css';

export const metadata = {
  title: 'NFLEX',
  description: 'Find & Search Design Design adorable in NFLEX',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        Navbar
        <main>{children}</main>
        Footer
      </body>
    </html>
  );
}
