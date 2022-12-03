import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import back from '../../assets/vector.svg';

export default function Survey() {
  const allPage = 7;
  const navigation = useNavigate();
  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState('');

  const selectAnswer = (answer) => {
    setAnswer(answer);
  };

  const nextPageClick = () => {
    sessionStorage.setItem(`step_${step}`, answer);
    setAnswer('');
    setStep(step + 1);
  };

  const done = () => {
    navigation('/tree');
  };

  useEffect(() => {
    console.log('useEffect실행');
  }, [step]);

  let content = (
    <>
      <QuestionWrap>
        <QuestionNum>
          <CurrentCount>{step + 1}</CurrentCount>/{allPage}
        </QuestionNum>
        <Question>
          {SURVEY_LIST[step].title}
          <p style={{ fontSize: '11px', fontWeight: 'normal' }}>
            *한 가지만 선택해주세요.
          </p>
        </Question>
      </QuestionWrap>
      <ButtonWrap>
        {SURVEY_LIST[step].answers.map((data, index) => {
          return (
            <AnswerButton onClick={() => selectAnswer(data)}>
              {data}
            </AnswerButton>
          );
        })}
        <NextButton onClick={step + 1 === allPage ? done : nextPageClick}>
          {step + 1 === allPage ? '트리 보기' : '다음'}
        </NextButton>
      </ButtonWrap>
    </>
  );

  return (
    <SurveyWrap>
      <Bar>
        <Back src={back} />
      </Bar>
      {content}
    </SurveyWrap>
  );
}
const SURVEY_LIST = [
  {
    id: 1,
    title: '크리스마스에 누구랑 보내시나요?',
    answers: ['가족', '혼자', '친구', '연인', '동료'],
  },
  {
    id: 2,
    title: '크리스마스날 어디에 가실 예정인가요?',
    answers: ['집', '가족모임', '친구집', '호텔', '회사'],
  },
  { id: 3, title: '혹시.. 커플이신가요..?', answers: ['네', '아니요'] },
  {
    id: 4,
    title: '크리스마스 날에는 어떤 노래를 듣고 싶으신가요?',
    answers: [
      '신나는 K-POP',
      '아무리 크리스마스라도 발라드!',
      '아무 노래',
      '팝송',
    ],
  },
  {
    id: 5,
    title: '크리스마스를 얼마나 좋아하시나요?',
    answers: ['하늘만큼 땅만큼!', '좋아해요', '그닥', '너무 미워요'],
  },
  { id: 6, title: '산타를 믿으시나요?', answers: ['네!!', '아니요'] },
  {
    id: 7,
    title: '눈을 좋아하시나요?',
    answers: ['Yesss!!!', 'Noooo...', '비 좋아하는데요?'],
  },
];

const Back = styled.img`
  margin-top: 10px;
  margin-left: 10px;
`;

const SurveyWrap = styled.div`
  width: 390px;
  height: 844px;
  border: 1px solid black;
`;
const QuestionWrap = styled.div`
  margin-top: 80px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: left;
`;
const QuestionNum = styled.div`
  margin-bottom: 10px;
  display: flex;
  color: gray;
`;
const Question = styled.div`
  width: 304px;
  height: 59px;
  font-weight: bold;
`;
const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
`;
const AnswerButton = styled.button`
  /* box-sizing: border-box; */
  width: 350px;
  height: 48px;
  /* left: 20px;
  top: 242px; */
  margin-bottom: 10px;
  justify-content: center;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  cursor: pointer;
  &:active,
  &:focus {
    border: 1px solid black;
  }
`;
const NextButton = styled.button`
  width: 350px;
  height: 48px;
  color: white;
  background-color: #326f51;
  border: none;
  border-radius: 6px;
  margin-top: 160px;
  align-items: center;
  cursor: pointer;
`;
const Bar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;
const IconImg = styled.img`
  width: 40px;
  height: 40px;
  margin: 4px;
`;
const CurrentCount = styled.div`
  color: black;
`;
