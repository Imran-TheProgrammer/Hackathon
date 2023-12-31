import Navbar from '@/components/section/navbar'
import './globals.css'
import { Sora } from 'next/font/google'
import Footer from '@/components/section/footer'
import Providers from '@/components/Provider'
import { ClerkProvider, auth } from '@clerk/nextjs'
const sora = Sora({ subsets: ['latin'],variable: '--font-sora', })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const {userId} = auth();
  return (
    <html>
      <body className={`${sora.variable} font-sans justify-between md:px-24 px-10 mx-auto lg:max-w-8xl overflow-x-hidden`}>
      <ClerkProvider>
        <Providers>
          <div>
            <Navbar userId={userId as string} />
            {children}
            <Footer/>
          </div>
        
        </Providers>
        </ClerkProvider>
        </body>
    </html>
  )
}

