import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import Appbar from './components/Appbar';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from 'react-router-dom';
import useTaskCardsState from "./store/taskCardsHook";
import { taskCards } from "./store/cards";
import TList from "./components/TList";
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import Register from "./components/Register";
import { useState } from 'react';
import { Button } from "@mui/material";
import { Icon } from "@mui/material";
import Home from "./components/Home";
import Answer from "./components/Answer";


export const TaskCardsContext = React.createContext();
export const QuestionContext = React.createContext();
export const AnswerContext = React.createContext();

const questionList = [
  { id: 1,  question: "議事録の取り方がわかりません"  },
]

const answerList = [
]


function App() {
  const [questions,setQuestions] = useState(questionList);
  const [answers,setAnswers] = useState(questionList);
  const count = useSelector((state) => state.count);

  return (
    <AnswerContext.Provider value = { [answers,setAnswers]}>
      <QuestionContext.Provider value = {[questions,setQuestions]}>
        <TaskCardsContext.Provider value={useTaskCardsState(taskCards)}>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/Register" element={<Register />} />
            </Routes>
          </BrowserRouter>
        </TaskCardsContext.Provider>
      </QuestionContext.Provider>
    </AnswerContext.Provider>
  );
}

export default App;