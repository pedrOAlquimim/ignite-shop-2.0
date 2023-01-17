import { styled } from "..";

export const ProductContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  maxWidth: 1180,
  margin: '0 auto',
  gap: '4.5rem',
  minHeight: 656,
})

export const ImageContainer = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  img: {
    objectFit: 'cover',
  }
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',

  h1: {
    fontSize: '$2xl',
    color: '$gray300',
    marginBottom: '1rem',
  },

  span: {
    fontSize: '$2xl',
    color: '$green300',
    paddingBottom: '2.5rem',
  },

  p: {
    fontSize: '$md',
    color: '$gray300',
  },

  button: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,

    padding: '1.25rem',
    borderRadius: 8,
    border: 0,

    fontWeight: 'bold',
    color: '$white',
    background: '$green500',
    cursor: 'pointer',

    '&:not(:disabled):hover': {
      background: '$green300',
    },

    '&:disabled': {
      opacity: 0.7,
      cursor: 'not-allowed'
    }
  }
})