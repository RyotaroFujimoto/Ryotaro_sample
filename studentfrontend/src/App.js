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

export const TaskCardsContext = React.createContext();
export const QuestionContext = React.createContext();

const questionList = [
  { id: 1,  question: "議事録の取り方がわかりません"  },
  { id: 2,  question: "Slackの使い方を教えて" },
  { id: 3,  question: "会社の位置がわかりません" },
]

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


function App() {
  const [questions,setQuestions] = useState(questionList);
  const count = useSelector((state) => state.count);

  return (
    <QuestionContext.Provider value = {[questions,setQuestions]}>
      <TaskCardsContext.Provider value={useTaskCardsState(taskCards)}>
        <BrowserRouter>
          <div className="App">
            <Appbar/>
            <h1>質問数: {questions.length}</h1>
            <LoginButton />
          </div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </TaskCardsContext.Provider>
    </QuestionContext.Provider>
  );
}

export default App;