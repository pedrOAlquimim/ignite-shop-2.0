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
  justifyContent: 'space-between',

  button: {
    lineHeight: 0,
    border: 0,
    borderRadius: 6,
    cursor: 'pointer',
    padding: '0.75rem',
    color: '$gray400',
    backgroundColor: '$gray800',
  }
})