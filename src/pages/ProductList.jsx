import styled from "styled-components";
import Announcement from "../component/Announcement";
import Navbar from "../component/Navbar";

const Container = styled.div``;

const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
    </Container>
  );
};

export default ProductList;
