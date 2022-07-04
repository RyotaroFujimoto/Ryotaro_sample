import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { QuestionContext } from '../App';
import { AppBar } from '@mui/material';
import { AnswerContext } from '../App';
import { CenterFocusStrong } from '@mui/icons-material';

const StyledPaper = styled(Paper)({
  width: '300px',
  height: '200px',
  margin: 'auto',
  padding: '10px',
  marginTop: '400px',
  textAlign: 'center',
});
  
const StyledButton = styled(Button)({
margin: '5px',
});

const Register = () => {
    const [questions,setQuestions] = useContext(QuestionContext);
    const navigate = useNavigate();
    const [answers,setAnswers] = useContext(AnswerContext);
    const newQuestion = {id:0,question:''};
    const newAnswer =  {id:0,answer:''};
    const handleQuestionChange = (event) => {
        newQuestion.question = event.target.value;
    };
    const handleAddClick = () => {
        newQuestion.id = questions.length + 1;
        newAnswer.questionId = questions.length + 1
        setQuestions([...questions, newQuestion]);
        setAnswers([...answers,[newAnswer]])
        navigate('/');
    };
    const handleReturnClick = () => {
    navigate('/');
    };

  return(
    <div>
      <AppBar />
      <StyledPaper>
        <Typography component="h1" variant="h5" margin='15px'>
          質問の登録
        </Typography>
        <form className="question_entry-form" noValidate>
          <TextField variant="outlined" margin="normal" id="question" label="質問内容" name = "question" onChange={handleQuestionChange} />
          <div className="question_entry-buttons">
            <StyledButton variant="outlined" color="primary" onClick={handleReturnClick}>
              キャンセル
            </StyledButton>
            <StyledButton variant="contained" color="primary" onClick={handleAddClick}>
              登録
            </StyledButton>
          </div>
        </form>
      </StyledPaper>
    </div>
  )
}

export default Register;