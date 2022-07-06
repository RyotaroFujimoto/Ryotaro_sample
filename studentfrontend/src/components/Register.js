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
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const StyledPaper = styled(Paper)({
  width: '300px',
  height: '250px',
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
    const today = new Date;
    const newQuestion = {questionId:0,questionDate:'',questionTitle:'',questionContent:'',questionRecommendation: "0",
    questionViews: "0"};

    const updataWebApi = async() => {
      const fetchOptions ={
          method: 'POST',
          body: JSON.stringify(newQuestion),
          headers: {'Content-Type': 'application/json'},
      };

      const response = await window.fetch(
          "http://localhost:8080/spring-boot-aks/question/findall",
        'http://localhost:8080/spring-boot-aks/question/findall',
          fetchOptions
      );

      if(!response.ok) throw new Error(`Fetch Error...${response.status}`);
      window.alert('新しい質問を登録しました。');
      }

    const handleQuestionChange = (event) => {
        newQuestion.question = event.target.value;
    };

    const handleAddClick = () => {
      newQuestion.questionDate = today.getFullYear() + "-" +  (today.getMonth() + 1 )+ "-"+ ('0' + today.getDate()).slice(-2)
      newQuestion.questionId = questions.length + 1;
      setQuestions([...questions, newQuestion]);
      //setAnswers([...answers,[newAnswer]])
      updataWebApi();
      navigate('/UnsolvedQuestion');
    };

    const handleReturnClick = () => {
    navigate('/UnsolvedQuestion');
    };

    const [address, setAdress] = React.useState('');
    const handleChange = (event) => {
      setAdress(event.target.value);
    };

  return(
    <div>
      <AppBar />
      <StyledPaper>
        <Typography component="h1" variant="h5" margin='15px'>
          質問の登録
        </Typography>
        <form className="question_entry-form" noValidate>
          <Box sx={{ width: 100  }} marginLeft='52px'>
            <FormControl fullWidth>
              <InputLabel>宛先</InputLabel>
              <Select
                value={address}
                label="Adress"
                onChange={handleChange}
              >
                <MenuItem value={10}>全員へ</MenuItem>
                {/* <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem> */}
              </Select>
            </FormControl>
          </Box>
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