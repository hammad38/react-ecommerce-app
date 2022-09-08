import { FacebookOutlined, Instagram, LinkedIn, Twitter } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
display: flex;
`
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Logo = styled.h1`
cursor: pointer;
display: flex;
`
const Desc = styled.p`
margin: 20px 0px;
`
const SocialContainer = styled.div`
display: flex;
`
const SocialIcon = styled.div`
cursor: pointer;
width: 40px;
height: 40px;
border-radius: 50%;
color: #fff;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`


const Center = styled.div`
flex: 1;

`
const Right = styled.div`
flex: 1;

`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Monarch.</Logo>
        <Desc>There are many variation of packages of Lorem Ispum available, but the majority have suffered alteration in some form, by injected humor, or randomised words which don't look even slightly believable.</Desc>

        <SocialContainer>
          <SocialIcon color="1877f2">
            <FacebookOutlined  />
          </SocialIcon>

          <SocialIcon color= "c32aa3" >
            <Instagram />
          </SocialIcon>

          <SocialIcon color = "1da1f2">
            <Twitter />
          </SocialIcon>

          <SocialIcon color = "0072b1"> 
            <LinkedIn />
          </SocialIcon>
        </SocialContainer>

      </Left>
      <Center></Center>
      <Right></Right>
      
    </Container>
  )
}

export default Footer