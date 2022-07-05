import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FaceIcon from '@mui/icons-material/Face';


const ToAnswerButtom = () => {
    const navigate = useNavigate();
    const ToHome = () => {
      navigate('/UnsolvedQuestion');
    };
    return (
      <ArrowBackIcon sx={{ fontSize: 150 }} onClick={ToHome} color="inherit" variant="contained"/>
    );
  };    

const ToLoginButtom = () => {
  const navigate = useNavigate();
  const ToLogin = () => {
    navigate('/Login');
  };
  return (
    <FaceIcon sx={{ fontSize: 150 }} onClick={ToLogin} color="inherit" variant="contained"/>
  );
}

const SolvedAnswer = () =>{
    return(
          <div>
            <ToAnswerButtom />
            <ToLoginButtom />
            <h1 class= ''>Home</h1>
          </div>
    )
}

export default SolvedAnswer;