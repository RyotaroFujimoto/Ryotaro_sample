import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FaceIcon from '@mui/icons-material/Face';
import "./SolvedQuestion.css";


const ToAnswerButtom = () => {
    const navigate = useNavigate();
    const ToHome = () => {
      navigate('/UnsolvedQuestion');
    };
    return (
      <ArrowBackIcon sx={{ fontSize: 150 }} onClick={ToHome} color="inherit" variant="contained"/>
    );
  };    

const ToMypageButtom = () => {
  const navigate = useNavigate();
  const ToMypage = () => {
    navigate('/Login');
  };
  return (
    <FaceIcon sx={{ fontSize: 150 }} onClick={ToMypage} color="inherit" variant="contained"/>
  );
}

const SolvedAnswer = () =>{
    return(
      <div class='background'>
        <h1 class= 'Text'>SolvedQuestionをここに表示</h1>
        <p class="log_text"><ToMypageButtom /></p>
        <p class="log_fukidasi">マイページへ</p>
        <p class="que_text"><ToAnswerButtom /></p>
        <p class="que_fukidasi">UnsolvedQuestion画面へ</p>
      </div>
    )
}

export default SolvedAnswer;


