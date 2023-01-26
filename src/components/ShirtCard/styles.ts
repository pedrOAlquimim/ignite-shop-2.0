import { styled } from '../../styles'

export const ProductContainer = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  position: 'relative',
  overflow: 'hidden',
  borderRadius: 8,
  cursor: 'pointer',

  a: {
    img: {
      objectFit: 'cover',
    },
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '1.25rem',

    backgroundColor: 'rgba(0, 0 , 0, 0.6)',
    borderRadius: 6,
    cursor: 'default',

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    div: {
      strong: {
        fontSize: '$lg',
        color: '$gray100',
      },

      p: {
        fontSize: '$xl',
        fontWeight: 'bold',
        color: '$green300',
      },
    },

    button: {
      lineHeight: 0,
      padding: '0.75rem',
      color: '$white',
      backgroundColor: '$green500',
      border: 0,
      borderRadius: 6,
      cursor: 'pointer',
      transition: 'background 0.2s',

      '&:not(:disabled):hover': {
        backgroundColor: '$green300',
      },

      '&:disabled': {
        opacity: 0.7,
        cursor: 'not-allowed',
      },
    },
  },

  '&:hover': {
    footer: {
      opacity: 1,
      transform: 'translateY(0%)',
    },
  },

  '@media (max-width: 768px)': {
    a: {
      img: {
        width: '420px',
        height: '400px',
      },
    },
  },

  '@media (max-width: 480px)': {
    a: {
      img: {
        width: '340px',
        height: '320px',
      },
    },
  },
})
