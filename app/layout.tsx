import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import { Header } from '@/components/header'
import { Wrapper } from '@/components/layout'

export const metadata: Metadata = {
  title: 'JHubs — find your dream job',
  description: 'Find your dream job at JHubs - the best job platform!',
  keywords: 'job, career, job listings, job search, dream job',
  authors: {
    name: 'cemtatli',
    url: 'https://github.com/cemtatli',
  },
  robots: 'index, follow',
}

const font = Inter({ subsets: ['latin'] })
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />
        <Wrapper>{children}</Wrapper>
        <Toaster position="top-center" reverseOrder={true} />
      </body>
    </html>
  )
}
