import React from "react";
import TList from "./TList";
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { useState } from "react";
import { QuestionContext } from "../App";
import { useContext } from "react";
import { hover } from "@testing-library/user-event/dist/hover";

const StyledBox = styled (Box)({
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
});

const Home = () =>{
    const [questions,setQuestions] = useContext(QuestionContext);
    return (
        <StyledBox>
            {questions.map((value) => {
                return <TList title = {value.question} categoryId = {0}/>
            })}
        </StyledBox>
    )
}

export default Home;