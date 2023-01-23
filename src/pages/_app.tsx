import * as Dialog from '@radix-ui/react-dialog'
import Link from 'next/link';
import Image from "next/image";
import logoImg from '../assets/logo.svg'
import type { AppProps } from 'next/app'
import { Handbag } from "phosphor-react";
import { CartModal } from '../components/CartModal';
import { CartContextProvider } from '../context/CartContext';
import { globalStyles } from '../styles/global';
import { Container, Header } from '../styles/pages/app'
import { useRouter } from 'next/router';

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()

  const showCardButton = pathname !== '/success'

  return (
    <CartContextProvider>
      <Container>
        <Header>
          <Link href='/'>
            <Image src={logoImg} alt='' />
          </Link>

          {showCardButton && (
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button>
                  <Handbag size={24} weight='bold' />
                </button>
              </Dialog.Trigger>

              <CartModal />
            </Dialog.Root>
          )}
        </Header>

        <Component {...pageProps} />
      </Container>
    </CartContextProvider>
  )
}
