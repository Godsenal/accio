import React from 'react';
import styled from 'styled-components';

const PageLayout = styled.div`
  max-width: 1020px;
  margin: auto;

  img {
    width: 100%;
  }
`;

const Container = styled.div`
  position: relative;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Inner = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
`;

const InputContainer = styled.div`
  & > div {
    position: absolute;
    width: 100%;
    top: 65%;
    left: 0;
  }

  input {
    width: 50%;
    color: white;
    background: inherit;

    padding: 1rem;

    border-width: 1px;
    border-style: solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(to right, #f15a24 0%, #ff00ff);
  }

  button {
    color: white;
    border: none;

    padding: 1rem;
    margin-left: 10px;
    background: linear-gradient(to right, #f15a24 0%, #ff00ff);
  }
`;

const PlayList = styled.ul`
  list-style: none;

  width: 100%;
  max-width: 500px;

  margin: 0 auto;

  h1 {
    text-align: left;
    margin-bottom: 2rem;
  }
`;

const PlayListItem = styled.li`
  display: flex;
  align-items: center;

  margin-top: 1rem;

  & > img {
    margin-left: 2rem;

    width: 64px;
    height: 64px;
  }

  & > div {
    margin-left: 2rem;
  }
`;

const PlayListTitle = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;

  strong {
    font-size: 1.2em;
    margin-bottom: 10px;
  }

  span {
    color: #6f717b;
  }
`;

const PLAY_LIST = [
  {
    title: 'Robbery',
    author: 'Juice WRLD',
  },
  {
    title: 'Sidewalks',
    author: 'The Weeknd',
  },
  {
    title: 'Where The Wild Things',
    author: 'Labrinth',
  },
  {
    title: 'Still',
    author: 'Noah Slee',
  },
  {
    title: 'Broken',
    author: 'DNMO, Sub Urban',
  },
];

const Home = () => {
  return (
    <PageLayout>
      <Container>
        <Inner>
          <img src="/accio1-1.svg" alt="로고" />
          <InputContainer>
            <div>
              <p>
                매주 월요일 1회 이상 추천리스트와 스토리를
                <br />
                등록하신 이메일을 통해 무료로 보내드립니다.
              </p>
              <input placeholder="E-mail" />
              <button>등록하기</button>
            </div>
          </InputContainer>
        </Inner>
      </Container>
      <Container
        style={{
          background: 'url(/accio1-2.svg)',
          backgroundSize: '100% 100%',
        }}
      >
        <PlayList>
          <h1>Play List</h1>
          {PLAY_LIST.map(({ title, author }, i) => (
            <PlayListItem key={i}>
              <strong>{i + 1}</strong>
              <img alt="앨범" />
              <PlayListTitle>
                <strong>{title}</strong>
                <span>{author}</span>
              </PlayListTitle>
            </PlayListItem>
          ))}
        </PlayList>
      </Container>
    </PageLayout>
  );
};

export default Home;
