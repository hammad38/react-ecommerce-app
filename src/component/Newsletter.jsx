import { Send } from '@material-ui/icons'
import styled from 'styled-components'
import { mobile } from '../Responsive'

const Container = styled.div`
height: 60vh;
background-color: #fcf5f5;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Title = styled.h1`
font-size: 70px;
${mobile({fontSize:"50px"})}
`
const Description = styled.div`
font-weight: 300;
font-size: 24px;
margin: 25px;
${mobile({textAlign: "center", fontSize:"20px"})}
`

const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: #fff;
display: flex;
justify-content: space-between;
border: 1px solid gray;
${mobile({width: "80%"})}

`
const Input = styled.input`
border: none;
outline: none;
font-size: 15px;
flex: 8;
padding: 20px;
`
const Button = styled.button`
border: none;
background-color: #fff;
cursor: pointer;
flex: 1;
background-color: black;
color: #fff;
`
const Newsletter = () => {
  return (
    <Container>
    <Title>Newsletter</Title>
    <Description>Get timely updates from your favorite products.</Description>
    <InputContainer>
      <Input placeholder='Your email' />
      <Button>
        <Send />
      </Button>
    </InputContainer>
    </Container>
  )
}

export default Newsletter