import styled from "styled-components";

const ShareButton = ({ children }) => {
  return (
    <>
      <ShareBtn>{children}</ShareBtn>
    </>
  );
};

export default ShareButton;

const ShareBtn = styled.button`
  width: 350px;
  height: 48px;
  background-color: #326f51;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: 1px solid #326f51;
  border-radius: 6px;
`;
