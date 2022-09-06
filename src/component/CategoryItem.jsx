import styled from "styled-components"

const Container = styled.div`
flex:1;
margin: 3px;
height: 70vh;
`
const Image = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
`
const Info = styled.div``
const Title = styled.h1``

const Button = styled.button`
text-transform: uppercase;
padding: 5px;
/* margin: 10px; */
background-color: transparent;
font-size: 15px;
border: 1px solid gray;
cursor: pointer;

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