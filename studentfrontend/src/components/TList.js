import React, { useContext } from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';
import Answer from './Answer';

// コンテキストのインポート
import { TaskCardsContext } from '../App';

const StyledPaper = styled(Paper)({
  backgroundColor: "LightPink",
  height: '100%',
  width: 300,
  padding: 8,
  marginRight: 130,
  marginLeft: 130,
  marginTop: 100,
  marginBottom: 100,
});

// TListコンポーネント
export const TList = (props) => {
  // カスタムフックで定義した状態をコンテキストを通じて取得
  const { state } = useContext(TaskCardsContext);
  // 取り扱いしやすいように対象のデータだけを取り出す
  const cardList = state[props.categoryId];

  return (
    <StyledPaper>
      <h4>{props.title}</h4>
      {cardList.length ? (
        cardList.map((card) => {
          return <Answer key={card.id} card={card} />;
        })
      ) : (
        <div>カードなし</div>
      )}
    </StyledPaper>
  );
};
export default TList;
