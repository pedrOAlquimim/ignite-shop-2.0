import { styled } from '..'

export const SuccessContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: '4.5rem auto',
  padding: '0 1.875rem',

  a: {
    margin: '4rem auto',
    textDecoration: 'none',
    lineHeight: '160%',

    fontSize: '$lg',
    fontWeight: 'bold',

    cursor: 'pointer',
    color: '$green500',

    '&:hover': {
      color: '$green300',
    },
  },
})

export const RoundedCardsContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  div: {
    height: '8.75rem',
    width: '8.75rem',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    boxShadow: '0 0 60px 0 rgba(0, 0, 0, 0.8)',
    borderRadius: '999px',

    img: {
      objectFit: 'cover',
    },
  },

  'div + div': {
    marginLeft: '-3.25rem',
  },
})

export const Details = styled('div', {
  textAlign: 'center',

  h2: {
    marginTop: '3rem',
    fontSize: '$2xl',
    color: '$gray100',
    lineHeight: '140%',
  },

  p: {
    marginTop: '1.5rem',
    maxWidth: '590px',
    fontSize: '$xl',
    color: '$gray300',
    lineHeight: '140%',
  },
})
