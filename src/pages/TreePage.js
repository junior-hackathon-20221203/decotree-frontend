import MyTree from '../components/MyTree';
import styled from 'styled-components';
import { useState } from 'react';
import TreeTitle from '../components/TreeTitle';
import ShareButton from '../components/ShareButton';
import Snowfall from 'react-snowfall';
import { getTree } from '../modules/index';
import { useEffect } from 'react';

import HiddenAudio from '../components/HiddenAudio/HiddenAudio';

const TreePage = () => {
  const [data, setData] = useState(null);

  const getTreeData = async (id) => {
    const data = await getTree(1234);

    const brightness = data.data['brightness'];
    const hasSanta = data.data['has_santa'];
    const songId = data.data['song_id'];
    const songType = data.data['song_type'];
    const weather = data.data['weather'];
    setData({
      brightness: brightness,
      hasSanta: hasSanta,
      songId: songId,
      songType: songType,
      weather: weather,
    });
    console.log(data);
  };

  useEffect(() => {
    if (!data) {
      getTreeData(1234);
    }

    console.log(data);
  }, [data]);

  return (
    data && (
      <>
        <HiddenAudio />
        <Wrapper>
          <Snowfall />
          <Container>
            <Header></Header>
            {/* {유저의 트리값 받아오기} */}

            <TreeTitle>가족트리</TreeTitle>
            <TreeContainer>
              <MyTree></MyTree>
            </TreeContainer>
            <ShareContainer>
              <ShareButton>친구에게 공유하기</ShareButton>
            </ShareContainer>
          </Container>
        </Wrapper>
      </>
    )
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;
const Container = styled.div`
  width: 390px;
  height: 844px;
  background-color: #cf3e39;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 17px 15px;
`;

const TreeContainer = styled.div`
  height: 80%;
`;

const ShareContainer = styled.div`
  height: 10%;
`;
export default TreePage;
