import { styled } from '../../styles'
import * as Dialog from '@radix-ui/react-dialog'

export const Content = styled(Dialog.Content, {
  maxWidth: '30rem',
  width: '100%',
  position: 'fixed',
  right: 0,
  top: 0,
  bottom: 0,
  padding: '4.5rem 3rem 3rem',

  display: 'flex',
  flexDirection: 'column',

  background: '$gray800',
  boxShadow: '-4px 0 30px rgba(0,0,0,0.8)',

  '@media (max-width: 768px)': {
    maxWidth: '100%',
  },
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

export const Products = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  gap: '1.5rem',
  marginTop: '2rem',
  overflowY: 'auto',
})

export const CartModalContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: 'auto',

  button: {
    width: '100%',
    padding: '1.25rem',
    borderRadius: 8,
    border: 0,
    cursor: 'pointer',

    fontWeight: 'bold',
    color: '$white',
    background: '$green500',

    '&:not(:disabled):hover': {
      background: '$green300',
    },

    '&:disabled': {
      opacity: 0.7,
      cursor: 'not-allowed',
    },
  },
})

export const CartDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '3.438rem',
})

export const Quantity = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  color: '$gray300',
  fontSize: '1rem',
  marginBottom: '0.5rem',

  span: {
    fontSize: '$md',
  },
})

export const Total = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  color: '$gray100',
  fontWeight: 'bold',

  p: {
    fontSize: '$md',
  },

  span: {
    fontSize: '$lg',
  },
})
