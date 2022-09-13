import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");

  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 20%;
  padding: 20px;
  background-color: #fff;
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  cursor: pointer;

`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 7px;
  border: 1px solid gray;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 7px ;
  text-decoration: underline;
  text-transform: uppercase;
  cursor: pointer;

  &:hover{
    color: blue;
  }

`;

const Button = styled.button`
  width: 40%;
  display: flex;
  justify-content: center;
  background-color: teal;
  color: #fff;
  font-size: 14px;
  border: none;
  padding: 10px 20px;
  margin: auto;
  margin-bottom: 7px;
  cursor: pointer;
  &:hover {
    background-color: #96ffff;
    color: #000;
  }
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="username" />
          <Button>LOG   IN</Button>
          <Link>Forgotten password?</Link>
          <Link>Create new account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
