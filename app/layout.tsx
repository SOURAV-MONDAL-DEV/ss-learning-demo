import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';
import Head from 'next/head';


export const metadata = {
  title: 'সহজ শেখা',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
        />
        <script type="text/javascript">
          {`
            (function(){
               emailjs.init("olyq2I1iF1OuD1Sel");
            })();
          `}
        </script>
      </Head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
