import { styled } from '../../styles'

export const HeaderContainer = styled('header', {
  padding: '2rem 1.875rem',
  width: '100%',
  maxWidth: 1240,
  margin: '0 auto',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  button: {
    marginLeft: 'auto',
    lineHeight: 0,
    border: 0,
    borderRadius: 6,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    padding: '0.75rem',

    cursor: 'pointer',
    color: '$gray400',
    backgroundColor: '$gray800',

    span: {
      position: 'absolute',
      top: 0,
      right: 0,

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      width: '1.5rem',
      height: '1.5rem',
      transform: 'translate(30%, -30%)',

      fontSize: '0.875rem',
      color: '$white',
      background: '$green300',
      outline: '3px solid $gray900',
      borderRadius: '999px',
    },
  },
})
