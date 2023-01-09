import Image from 'next/image'
import camiseta1 from '../assets/shirts/1.png'
import { Handbag } from 'phosphor-react'

export default function Home() {
  return (
    <div>
      <div>
        <Image src={camiseta1} alt='' />
        <div>
          <div>
            <h2>Camisa X</h2>
            <span>R$ 79,90</span>
          </div>

          <button>
            <Handbag size={24} weight='bold' />
          </button>
        </div>
      </div>
    </div>
  )
}
