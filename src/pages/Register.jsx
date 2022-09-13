import styled from "styled-components";

const Container = styled.div`
height: 100vh;
width: 100vw;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
display: flex;
align-items: center;
justify-content: center;
position: relative;
`;

const Wrapper = styled.div`
width: 40%;
padding: 20px;
background-color: #fff;
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
display: flex;
flex-wrap: wrap;
`;

const Input = styled.input`
flex: 1 ;
min-width: 40%;
margin: 10px 20px 0px 0px;
padding: 7px;
border: 1px solid gray;

`;

const Agreement = styled.span`
font-size: 12px;
margin: 20px 0px;
`

const Button = styled.button`
width: 40%;
/* display: flex; */
justify-content: center;
background-color: transparent;
border: 1px solid teal;
padding: 5px;
`

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>create an account</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b> </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
