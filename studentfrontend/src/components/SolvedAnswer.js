import React from "react";
import { useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';

const ToAnswerButtom = () => {
    const navigate = useNavigate();
    const ToHome = () => {
      navigate('/');
    };
    return (
      <AddIcon sx={{ fontSize: 150 }} onClick={ToHome} color="inherit" variant="contained"/>
    );
  };    

const SolvedAnswer = () =>{
    return(
          <div><ToAnswerButtom /></div>
    )
}

export default SolvedAnswer;