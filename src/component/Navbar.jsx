import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height: 60px;
background-color: black;
color: white;
display: flex;
justify-content: center;
align-items: center;
`

const Navbar = () => {
  return (
    <Container>
      This is navbar
    </Container>
  )
}

export default Navbar
