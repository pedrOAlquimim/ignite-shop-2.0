import Image from "next/image";
import camisa1 from '../../assets/shirts/1.png'
import { ImageContainer, ItemCardContainer, ItemDetails } from "./styles";

interface ItemCardProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: number
  }
}

export function ItemCard({product}: ItemCardProps) {
  return (
    <ItemCardContainer>
      <ImageContainer>
        <Image src={product.imageUrl} alt='' width={100} height={100} />
      </ImageContainer>

      <ItemDetails>
        <div>
          <h2>{product.name}</h2>
          <strong>{product.price}</strong>
        </div>

        <button>
          Remover
        </button>
      </ItemDetails>
    </ItemCardContainer>
  )
}