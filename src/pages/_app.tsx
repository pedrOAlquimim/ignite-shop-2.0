import type { AppProps } from 'next/app'
import { Container, Header } from '../styles/pages/app'
import { Handbag } from "phosphor-react";
import Image from "next/image";
import logoImg from '../assets/logo.svg'
import { globalStyles } from '../styles/global';
import Link from 'next/link';

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href='/'>
          <Image src={logoImg} alt='' />
        </Link>

        <button>
          <Handbag size={24} weight='bold' />
        </button>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
