import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
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
  }
})