import '@/assets/styles/globals.css';

export const metadata = {
  title: 'PropertyPulse | Find the Perfect Rental',
  description: 'Find your dream rental property',
  keywords: 'renta, find rentals, find properties',
};

const MainLayout = ({ children }) => {
  return (
    <html lang="eng">
      <body>{children}</body>
    </html>
  );
};
export default MainLayout;
