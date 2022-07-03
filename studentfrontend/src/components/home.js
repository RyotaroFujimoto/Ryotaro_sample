import React from "react";
import { StickyNote } from "./StickyNote";
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { QuestionContext } from "../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import "./Home.css";

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
      <AddCircleIcon sx={{ fontSize: 100 }} onClick={Register} color="inherit" variant="contained"/>
    );
  };
  

const Home = () =>{
    const [questions,setQuestions] = useContext(QuestionContext);
    return (
        <div>
          <h1 class="Text">質問数: {questions.length}</h1>
          <StyledBox>
          {questions.map((value, id) => {
            return <StickyNote title = {value.question} id = {id}/>
          })}
          </StyledBox>
          <div class="Button"><ToRegisterButton /></div>
        </div>
    )
}

export default Home;