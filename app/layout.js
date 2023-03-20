// These styles apply to every route in the application
import './globals.css';
export const metadata = {
  title: 'adrianveinot.com',
  description: 'Two decades helping people MOVE, EAT, LOOK and FEEL Better. I\'ll TEACH YOU how to get the Results your want!',
  image:'./public/AdrianVeinotDark.png',
  url:"https://adrianveinot.com",
  type:'article'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-black'>
        {children}
      </body>
    </html>
  );
}

