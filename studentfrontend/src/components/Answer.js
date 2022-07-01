import React from 'react';
import { useContext } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import { AnswerContext } from '../App';

  
const StyledAvatar = styled(Avatar)({
backgroundColor: '#EE0290',
});

const StyledButton = styled(Button)({
margin: '5px',
});

const Answer = () => {
    const [answers,setAnswers] = useContext(AnswerContext);
    const newAnswer = {id:0,answer:''}
    const handleAnswerChange = (event) => {
        newAnswer.answer = event.target.value;
    }
    const handleAddClick = () => {
        // 新しいIDを取得
        newAnswer.id = answers.length + 1;
        //質問追加
        setAnswers([...answers, newAnswer]);
    }

  return(
    <div>
      <form className="answer_entry-form" noValidate>
        <TextField variant="filled" margin="normal" id="answer" label="回答" name = "answer" onChange={handleAnswerChange}  />
        <div className="answer_entry-buttons">
          <StyledButton variant="contained" color="primary" onClick={handleAddClick}>
           投稿する
          </StyledButton>
        </div>
      </form>
    </div>
  )
}

export default Answer;