import React from "react";
import TList from "./TList";
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { QuestionContext } from "../App";
import { useContext } from "react";
import { Button } from "@mui/material";
import Appbar from "./Appbar";
import { useNavigate } from "react-router-dom";

const StyledBox = styled (Box)({
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
});

const LoginButton = () => {
    const navigate = useNavigate();
    const Register = () => {
      navigate('/Register');
    };
    return (
      <Button onClick={Register} color="inherit" variant="contained">
        質問を追加
      </Button>
    );
  };
  

const Home = () =>{
    const [questions,setQuestions] = useContext(QuestionContext);
    return (
        <div className="App">
        <LoginButton />
        <StyledBox>
            {questions.map((value) => {
                return <TList title = {value.question} categoryId = {0}/>
            })}
        <h1>質問数: {questions.length}</h1>
        </StyledBox>
        </div>
    )
}

export default Home;