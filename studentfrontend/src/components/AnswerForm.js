import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import Answer from './Answer';
import { useState } from 'react';

const StyledButton = styled(Button)({
margin: '5px',
});

const AnswerForm = (props) => {
    const questionId = props.questionId;
    const [answerlist,setAnswerList] = useState([])
    const newAnswer = {id:0, answer:'', questionId:0}
    const handleAnswerChange = (event) => {
        newAnswer.answer = event.target.value;
    }
    const handleAddClick = () => {
        //質問のカテゴリーidを付与
        newAnswer.questionId = questionId;
        //回答追加
        setAnswerList([...answerlist,newAnswer])
    }

  return(
    <div>
      {answerlist.length ? (
      answerlist.map((answer,id) => {
        return <Answer key={id} Answer={answer.answer}/>
      })
        ) : (
       <div>まだ回答はありません</div>
        )}
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