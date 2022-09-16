import styled from "styled-components";
import Announcement from "../component/Announcement";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Newsletter from "../component/Newsletter";
import Products from "../component/Products";
import { mobile } from "../Responsive";

const Container = styled.div``;

const Title = styled.h1`
margin: 20px;  
`
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
/* padding: 20px;   */
`

const Filter = styled.div`
margin: 20px;
${mobile({width: "0px 20px", display: "flex", flexDirection: "column"})}
`
const FilterText = styled.span`
font-weight: 600;
font-size: 20px;
margin-right: 20px;
${mobile({marginRight: "0px"})} 

`
const Select = styled.select`
padding: 10px;
margin-right: 20px;
${mobile({margin: "10px 0px"})} 
/* font-size: 17px; */
`
const Option = styled.option`
border: none;
`

const   ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select>
                <Option disabled selected>Color</Option>
                <Option>White</Option>
                <Option>Black</Option>
                <Option>Red</Option>
                <Option>Blue</Option>
                <Option>Yellow</Option>
                <Option>Green</Option>
            </Select>
            <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>

        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>

      </FilterContainer>

      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
