import React from 'react';
import { useContext } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import { AnswerContext } from '../App';

const StyledButton = styled(Button)({
margin: '5px',
});

const AnswerForm = (props) => {
    const [answers,setAnswers] = useContext(AnswerContext);
    const newAnswer = {id:0, text:'', categoryId:0}
    const handleAnswerChange = (event) => {
        newAnswer.answer = event.target.value;
    }
    const handleAddClick = () => {
        // 新しいIDを取得
        newAnswer.id = answers.length + 1;
        //質問のカテゴリーidを付与
        newAnswer.categoryId = props.id
        //回答追加
        setAnswers([...answers, newAnswer]);
    }

  return(
    <div>
      {answers.map((answer) => {
        return (
          <div key={answer.categoryId}>{answer.id}:{answer.answer}</div>
        )
      })}
      <form action="sample-form.php" method="post" target="_blank">
        <TextField variant="filled" margin="normal" id="answer" label="回答" name = "answer" onChange={handleAnswerChange}  />
        <div>
          <StyledButton variant="contained" color="primary" onClick={handleAddClick}>
           投稿する
          </StyledButton>
        </div>
      </form>
    </div>
  )
}

export default AnswerForm;