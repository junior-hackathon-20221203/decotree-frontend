import styled from "styled-components";

const TreeTitle = ({ children }) => {
  return (
    <TitleContainer>
      <Title>
        <Text>{children}</Text>
      </Title>
    </TitleContainer>
  );
};

export default TreeTitle;
const Text = styled.div`
  font-size: 28px;
  font-family: "Roboto";
  color: #275732;
  font-weight: 600;
  line-height: 33px;
  letter-spacing: -0.04em;
`;
const Title = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 14px;
  background-color: white;
  justify-content: center;
  align-items: center;
  display: flex;
`;
const TitleContainer = styled.div`
  width: 348px;
  height: 67px;
  border-radius: 14px;
  background-color: #3a7a49;
  border: 8px dotted #ffd04d;
  display: flex;
`;
