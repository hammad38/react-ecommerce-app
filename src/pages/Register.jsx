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
`;

const Wrapper = styled.div`
padding: 200px;
`;

const Title = styled.h1`
  text-transform: uppercase;
`;
const Form = styled.form``;

const Input = styled.input``;

const Agreement = styled.span``

const Button = styled.button``

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
          <Agreement>By creating an account, I consent to the processing of my personal data in accordance with the </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
