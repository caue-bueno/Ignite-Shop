import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
import { globalStyles } from '../styles/global'
import logoImg from '../assets/logo.svg'
import Image from 'next/image'
import { Container, Header } from '../styles/pages/app'
// const roboto = Roboto({
//   weight: '400',
//   subsets: ['latin'],
// })

globalStyles()

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
      </Header>
      <main>
        <Component {...pageProps} />
      </main>
    </Container>
  )
}
