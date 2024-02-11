import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from '../lib/registry'
import GlobalStyles from '@/styles/GlobalStyle'
import Header from '@/components/Header/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Suprema Pokecenter',
  description: 'Centro Pokemon'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <Header />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
