import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  /* background-color: #c6002a;   */
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: lightgray;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;
const Slide = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: #${props=>props.bg};
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
font-size: 70px;
text-transform: uppercase;
`
const Desc = styled.p`
text-transform: uppercase;
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`
const Button = styled.button`
text-transform: uppercase;
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
border: 1px solid gray;
`

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left" >
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        <Slide bg="f7e5c5">
          <ImgContainer>
            <Image src="https://png.pngitem.com/pimgs/s/509-5095414_fashion-model-png-transparent-png.png" />
          </ImgContainer>
          <InfoContainer>
            <Title>summer sale</Title>
            <Desc>don't compromise on style! get 30% off for new arrivals.</Desc>
            <Button>buy now</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="f7e5c9">
          <ImgContainer>
            <Image src="https://png.pngitem.com/pimgs/s/509-5095414_fashion-model-png-transparent-png.png" />
          </ImgContainer>
          <InfoContainer>
            <Title>winter sale</Title>
            <Desc>don't compromise on style! get 30% off for new arrivals.</Desc>
            <Button>buy now</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="f7e5c0">
          <ImgContainer>
            <Image src="https://png.pngitem.com/pimgs/s/509-5095414_fashion-model-png-transparent-png.png" />
          </ImgContainer>
          <InfoContainer>
            <Title>popular sale</Title>
            <Desc>don't compromise on style! get 30% off for new arrivals.</Desc>
            <Button>buy now</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
