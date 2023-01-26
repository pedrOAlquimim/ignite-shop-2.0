import { styled } from '..'

export const ProductContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  maxWidth: 1240,
  paddingLeft: '1.875rem',
  paddingRight: '1.875rem',
  margin: '0 auto',
  gap: '4.5rem',
  height: 656,

  '@media (max-width: 1279px)': {
    flexDirection: 'column',

    gap: '2rem',
  },
})

export const ImageContainer = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,

  img: {
    objectFit: 'cover',
  },

  '@media (max-width: 1279px)': {
    img: {
      width: '25rem',
      height: '22.5rem',
    },
  },

  '@media (max-width: 401px)': {
    img: {
      width: '22.5rem',
      height: '20rem',
    },
  },
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

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
    marginTop: 'auto',
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
      cursor: 'not-allowed',
    },
  },

  '@media (max-width: 1279px)': {
    position: 'static',

    button: {
      position: 'static',
      margin: '3rem 0',
    },
  },
})
