import { styled } from '..'

export const HomeContainer = styled('div', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: 656,

  '@media (max-width: 1279px)': {
    paddingLeft: '1.875rem',
    maxWidth: '100%',
  },

  '@media (max-width: 768px)': {
    minHeight: 576,
  },

  '@media (max-width: 480px)': {
    minHeight: 496,
  },
})
