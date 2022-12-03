import React from 'react';
import styled from 'styled-components';

import BackSvg from './BackSvg';

const TreeTemplates = () => {
  return (
    <Wrapper>
      <Header>
        <BackSvg />
      </Header>
      <Contents>
        <TreeTitle>title</TreeTitle>
        {/* tree components */}
        <Button>친구에게 공유하기</Button>
      </Contents>
    </Wrapper>
  );
};

export default TreeTemplates;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Header = styled.div`
  width: 100%;
  padding: 20px;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const TreeTitle = styled.div`
  text-align: center;
  line-height: 68px;
  width: 348px;
  height: 68px;
  border: solid 10px skyblue;
  border-radius: 12px;
`;

const Button = styled.div`
  text-align: center;
  line-height: 48px;
  width: 348px;
  height: 48px;
  border-radius: 6px;
  background-color: #326f51;
  color: white;
`;
