import Image from "next/image";
import camisa1 from '../../assets/shirts/1.png'
import { ImageContainer, ItemCardContainer, ItemDetails } from "./styles";

export function ItemCard() {
  return (
    <ItemCardContainer>
      <ImageContainer>
        <Image src={camisa1} alt='' width={100} height={100} />
      </ImageContainer>

      <ItemDetails>
        <div>
          <h2>Camiseta Explorer</h2>
          <strong>R$ 62,90</strong>
        </div>

        <button>
          Remover
        </button>
      </ItemDetails>
    </ItemCardContainer>
  )
}