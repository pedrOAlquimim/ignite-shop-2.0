import * as Dialog from '@radix-ui/react-dialog'
import Link from 'next/link'
import Image from 'next/image'
import logoImg from '../../assets/logo.svg'
import { Handbag } from 'phosphor-react'
import { useRouter } from 'next/router'
import { CartModal } from '../CartModal'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { HeaderContainer } from './styles'

export function Header() {
  const { quantity } = useContext(CartContext)
  const { pathname } = useRouter()

  const showCardButton = pathname !== '/success'

  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>

      {showCardButton && (
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button>
              <Handbag size={24} weight="bold" />
              {quantity >= 1 && <span>{quantity}</span>}
            </button>
          </Dialog.Trigger>

          <CartModal />
        </Dialog.Root>
      )}
    </HeaderContainer>
  )
}
