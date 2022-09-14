import styled from "styled-components";
import Announcement from "../component/Announcement";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Title = styled.h1`
padding: 20px;
`;

const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;
const TopButton = styled.button``;
const TopTexts = styled.div``;
const TopText = styled.span``;
const Bottom = styled.div``;


const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Whishlist</TopText>
            <TopButton>CHECKOUT NOW</TopButton>
          </TopTexts>
        </Top>
        <Bottom></Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
