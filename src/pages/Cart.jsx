import styled from "styled-components"
import Announcement from "../component/Announcement"
import Footer from "../component/Footer"
import Navbar from "../component/Navbar"
import Newsletter from "../component/Newsletter"
import Login from "./Login"
import Register from "./Register"

const Container = styled.div``


const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Newsletter />
        <Register />
        <Login />
        <Footer />
    </Container>
  )
}

export default Cart 