import { styled } from "../../styles";
import * as Dialog from "@radix-ui/react-dialog";

export const Content = styled(Dialog.Content, {
  width: 480,
  height: '100%',
  position: 'fixed',
  right: 0,
  top: 0,

  padding: '4.5rem 3rem 3rem',

  background: '$gray800'
})

export const Title = styled(Dialog.Title, {
  fontSize: '$md',
  color: '$gray100', 
})

export const Close = styled(Dialog.Close, {
  position: 'absolute',
  top: '1.5rem',
  right: '1.5rem',

  color: '$gray400',
  background: 'transparent',

  lineHeight: 0,
  border: 0,
  cursor: 'pointer',
})