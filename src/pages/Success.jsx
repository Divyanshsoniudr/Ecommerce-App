import styled from "styled-components";

const Container = styled.div``;
const Wrapper = styled.div``;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const success = () => {
    return (
      <Container>
        <Wrapper>
          <Title>Order Confimed</Title>
            <Button>RizzBoom will Process your Order Now. You will be Updated via Email</Button>
        </Wrapper>
      </Container>
    );
  };
  
