import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { Content, Title, Close } from "./styles";

export function CartModal() {
  return (
    <Dialog.Portal>
      <Content>
        <Title>Sacola de compras</Title>

        <Close>
          <X size={24} weight='bold' />
        </Close>
      </Content>
    </Dialog.Portal>
  )
}
