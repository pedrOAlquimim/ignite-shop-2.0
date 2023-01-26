import { styled } from '../../styles'

export const ItemCardContainer = styled('div', {
  display: 'flex',
  gap: '1.25rem',
  maxHeight: '100%',
})

export const ImageContainer = styled('div', {
  height: 94,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,

  img: {
    objectFit: 'cover',
  },
})

export const ItemDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '0.5rem',

  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.125rem',

    h2: {
      color: '$gray300',
      fontWeight: 400,
      fontSize: '$md',
    },

    strong: {
      color: '$gray100',
      fontWeight: 'bold',
      fontSize: '$md',
      lineHeight: '160%',
    },
  },

  button: {
    background: 'transparent',
    border: 0,
    color: '$green500',
    cursor: 'pointer',
    fontWeight: 'bold',
    lineHeight: '160%',

    '&:hover': {
      color: '$green300',
    },
  },
})
