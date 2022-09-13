import styled from "styled-components"
import Announcement from "../component/Announcement"
import Footer from "../component/Footer"
import Navbar from "../component/Navbar"

const Container = styled.div`  
 `
const Wrapper = styled.div`
display: flex;
justify-content: center;
`
const Title = styled.h1``
const Top = styled.div``                 
const Bottom = styled.div``


const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top></Top>
            <Bottom></Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart 