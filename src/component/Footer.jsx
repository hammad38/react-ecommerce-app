import styled from "styled-components"

const Container = styled.div`
`
const Left = styled.div``

const Center = styled.div`
`
const Right = styled.div`
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Monarch,</Logo>
        <Decs>There are many variation of packages of Lorem Ispum available, but the majority have suffered alteration in some form, by injected humor, or randomised words which don't look even slightly believable</Decs>

      </Left>
      <Center></Center>
      <Right></Right>
      
    </Container>
  )
}

export default Footer