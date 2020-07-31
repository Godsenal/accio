import React from 'react';
import styled from 'styled-components';
import { Input, Button, Header } from '../common';

const PageLayout = styled.div`
  max-width: 64em;
  padding: 1em 1.5em;
  img {
    width: 100%;
    margin: auto;
  }
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${Button} {
    border-radius: 10px;
  }
`;

const Logo = styled.div`
  margin: 0 auto;
  padding-top: 4rem;

  img {
    width: 100%;
    height: 100%;
    margin: auto;
  }
`;

const Container = styled.div`
  position: relative;
  text-align: center;
  height: 100vh;
`;

const InputContainer = styled.div`
  text-align: center;

  margin: auto;

  ${Input} {
    color: black;
    border: none;
    border-radius: 10px;
    background-color: #ccc;

    display: block;
    width: 100%;
  }

  ${Button} {
    margin-top: 10px;
    border-radius: 10px;
    width: 100%;
  }
`;

const SubmitContainer = styled.div`
  ${Input} {
    width: 100%;
    border: none;
    border-radius: 10px;
    margin-bottom: 10px;
    background-color: #ccc;
  }
  textarea {
    height: 200px;
  }
  ${Button} {
    width: 100%;
    border-radius: 10px;
  }
`;

const Home = () => {
  return (
    <PageLayout>
      <Nav>
        <h1>Accio</h1>
        <Button>PlayList</Button>
      </Nav>
      <Container>
        <Logo>
          <img src="/accio1-1.svg" alt="로고" />
        </Logo>
        <h1>
          숨어있는 명곡 <br /> 추천 서비스
        </h1>
        <InputContainer>
          <Input placeholder="E-mail" />
          <Button>등록하기</Button>
        </InputContainer>
        <p>
          매주 월요일 1회 이상 추천리스트와 스토리를
          <br />
          등록하신 이메일을 통해 무료로 보내드립니다.
        </p>
      </Container>
      <SubmitContainer>
        <Header>
          나만 듣기 아까운
          <br /> 노래가 있나요?
        </Header>
        <Input placeholder="노래 제목" />
        <Input
          placeholder="노래 설명"
          as="textarea"
          style={{ resize: 'none' }}
        />
        <Button>등록하기</Button>
        <img src="/accio1-3.svg" alt="패턴" />
      </SubmitContainer>
    </PageLayout>
  );
};

export default Home;
