import { styled } from "../../styles";
import * as Dialog from "@radix-ui/react-dialog";

export const Content = styled(Dialog.Content, {
  width: 480,
  height: '100vh',
  position: 'fixed',
  right: 0,
  top: 0,
  padding: '4.5rem 3rem 3rem',

  background: '$gray800',
  boxShadow: '-4px 0 30px rgba(0,0,0,0.8)'
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

export const CartModalContainer = styled('div', {
  height: '100%',
  position: 'relative',
})

export const Products = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  marginTop: '2rem'
})

export const CartDetails = styled('div', {
  position: 'absolute',
  width: '100%',
  bottom: '3rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '3.5rem',

  button: {
    color: 'white',
    fontWeight: 'bold',
    padding: '1.25rem',
    borderRadius: 8,
    border: 0,
    background: '$green500',
    cursor: 'pointer',

    '&:hover': {
      background: '$green300',
    }
  }
})

export const Quantity = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  color: '$gray300',
  fontSize: '1rem',
  marginBottom: '0.5rem',

  span: {
    fontSize: '$md',
  }
})

export const Total = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  color: '$gray100',
  fontWeight: 'bold',
  
  p: {
    fontSize: '$md'
  },
  
  span: {
    fontSize: '$lg'
  }
})