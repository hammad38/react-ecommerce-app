import styled from "styled-components"

const Container = styled.div`
flex:1;
margin: 3px;
height: 70vh;
position: relative;
`
const Image = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
`
const Info = styled.div`
position: absolute;
top: 0;
left: 0;
display: flex;
flex-direction: column ;
align-items: center;
justify-content: center;
height: 100%;
width: 100%;
`

const Title = styled.h1`
color: white;
margin-bottom: 20px;
`

const Button = styled.button`
border: none;
text-transform: uppercase;
padding: 5px;
font-size: 20px;
font-weight: 500;
cursor: pointer;
opacity: 0.5;

`

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button>shop now</Button>
            </Info>
        
    </Container>
  )
}

export default CategoryItem