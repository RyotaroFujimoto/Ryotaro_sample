import React from "react";
import { StickyNote } from "./StickyNote";
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { QuestionContext } from "../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import AddIcon from '@mui/icons-material/Add';
import "./UnsolvedQuestion.css";

const StyledBox = styled (Box)({
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
});

const ToRegisterButton = () => {
    const navigate = useNavigate();
    const Register = () => {
      navigate('/Register');
    };
    return (
      <AddIcon sx={{ fontSize: 150 }} onClick={Register} color="inherit" variant="contained"/>
    );
  };
  
const SearchButtom = () => {
  return (
    <FilterAltIcon sx={{ fontSize: 150 }} color="inherit" variant="contained"/>
  );
};

const QuestionButtom = () => {
  const navigate = useNavigate();
  const Guide = () => {
    navigate('/Guide');
  };
  return (
    <QuestionMarkIcon  sx={{ fontSize: 150 }} color="inherit" variant="contained" onClick={Guide}/>
  )
}

const BackButtom = () => {
  const navigate = useNavigate();
  const SolvedAnswer = () => {
    navigate('/');
  };
  return (
    <ArrowBackIcon sx={{ fontSize: 150 }} color="inherit" variant="contained" onClick={SolvedAnswer}/>
  );
};

const UnsolvedQuestion = () =>{
    const [questions,setQuestions] = useContext(QuestionContext);
    return (
        <div>
          {/* <h1 class="Text">質問数: {questions.length}</h1> */}
          <StyledBox>
          {questions.map((value, idx) => {
            return <StickyNote title = {value.question} questionId = {value.id} key = {idx}/>
          })}
          </StyledBox>
          <div class="reg-Buttom"><ToRegisterButton /></div>
          <div class="ser-Buttom"><SearchButtom /></div>
          <div class="que-Buttom"><QuestionButtom /></div>
          <div class="bac-Buttom"><BackButtom /></div>
        </div>
    )
}

export default UnsolvedQuestion;