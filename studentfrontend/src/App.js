import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Register from "./components/Register";
import { useState } from 'react';
import Home from "./components/UnsolvedQuestion";
import Guide from "./components/Guide";
import SolvedAnswer from "./components/SolvedQuestion";
import UnsolvedQuestion from "./components/UnsolvedQuestion";
import { Login } from "./components/Login";



export const QuestionContext = React.createContext();
export const AnswerContext = React.createContext();

const questionList = [
]

const answerList = [[

]
];

console.log(answerList);

function App() {
  const [questions,setQuestions] = useState(questionList);
  const [answers,setAnswers] = useState(answerList);

  return (
    <AnswerContext.Provider value = { [answers,setAnswers]}>
      <QuestionContext.Provider value = {[questions,setQuestions]}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<SolvedAnswer />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Guide" element={<Guide />} />
            <Route path="/UnsolvedQuestion" element={<UnsolvedQuestion />} />
            <Route path="/Login" element={<Login/>} />
          </Routes>
        </BrowserRouter>
      </QuestionContext.Provider>
    </AnswerContext.Provider>
  );
}

export default App;