import { yellow } from "@mui/material/colors";
import styled from "styled-components";
import Announcement from "../component/Announcement";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => (props.type === "filled" && "none")};
  background-color: ${props=>props.type === "filled" && "black"  };
  color: ${props=>props.type==="filled" && "white" };

`;

const TopTexts = styled.div``;

const TopText = styled.span`
  margin: 0px 10px;
  text-decoration: underline;
  cursor: pointer;
`;

const Bottom = styled.div``;
const Info = styled.div``;
const Summary = styled.div``;



const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton type="abc">CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Whishlist</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>

        <Bottom>
            <Info>
                <Summary></Summary>
            </Info>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
