import { useState } from "react";
import styled from "styled-components";
import Announcement from "../component/Announcement";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Newsletter from "../component/Newsletter";

const Container = styled.div``;
const Wrapper = styled.div``;
const ImgContainer = styled.div``;
const Image = styled.img``;
const InfoContainer = styled.div``;
const Title = styled.h1``;
const Desc = styled.p``;
const Price = styled.span``
const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>

        <InfoContainer>
          <Title>Denim JumpSuit </Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae illum
            voluptatum fugit quod aut natus iure molestias vel! Ut hic maxime
            quidem possimus nam excepturi dolor tempore officiis consequuntur
            porro!
          </Desc>
          <Price>$ 20</Price>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
