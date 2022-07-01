import React from "react";
import TList from "./TList";
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { QuestionContext } from "../App";
import { useContext } from "react";
import { Button, Fab } from "@mui/material";
import Appbar from "./Appbar";
import { useNavigate } from "react-router-dom";
import AddCircleIcon from '@mui/icons-material/AddCircle';

const StyledBox = styled (Box)({
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
});

const RegisterButton = () => {
    const navigate = useNavigate();
    const Register = () => {
      navigate('/Register');
    };
    return (
      <AddCircleIcon sx={{ fontSize: 100 }} onClick={Register} color="inherit" variant="contained" />
    );
  };
  

const Home = () =>{
    const [questions,setQuestions] = useContext(QuestionContext);
    return (
        <div  class="App">
        <h1 >質問数: {questions.length}</h1>
        <StyledBox>
            {questions.map((value) => {
                return <TList title = {value.question} categoryId = {0}/>
            })}
        </StyledBox>
        <RegisterButton />
        </div>
    )
}

export default Home;