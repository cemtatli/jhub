import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import { Header } from '@/components/header'
import { Wrapper } from '@/components/layout'
import ClientOnly from '@/components/ClientOnly'

export const metadata: Metadata = {
  title: 'JHubs — find your dream job',
  description: 'Find your dream job at JHubs - the best job platform!',
  keywords: 'job, career, job listings, job search, dream job',
  authors: {
    name: 'cemtatli',
    url: 'https://github.com/cemtatli',
  },
}

const font = Inter({ subsets: ['latin'] })
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Header />
          <Wrapper>{children}</Wrapper>
        </ClientOnly>
        <Toaster position="top-center" />
      </body>
    </html>
  )
}
