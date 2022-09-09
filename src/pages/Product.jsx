import styled from "styled-components"
import Announcement from "../component/Announcement"
import Footer from "../component/Footer"
import Navbar from "../component/Navbar"
import Newsletter from "../component/Newsletter"

const Container = styled.div`
`

const Product = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Product