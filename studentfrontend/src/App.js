import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Register from "./components/Register";
import { useState } from 'react';
import Home from "./components/UnsolvedQuestion";
import GuideInUnsolved from "./components/GuideInUnsolved";
import SolvedQuestion from "./components/SolvedQuestion";
import UnsolvedQuestion from "./components/UnsolvedQuestion";
import { Login } from "./components/Login";
import GuideInSolved from "./components/GuideInSolved";
import MyPage from "./components/MyPage";



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
            <Route exact path="/" element={<SolvedQuestion />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/GuideInSolved" element={<GuideInSolved />} />
            <Route path="/UnsolvedQuestion" element={<UnsolvedQuestion />} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/SolvedQuestion" element={<SolvedQuestion />} />
            <Route path="/GuideInUnsolved" element={<GuideInUnsolved/>} />
            <Route path="/MyPage" element={<MyPage/>} />
          </Routes>
        </BrowserRouter>
      </QuestionContext.Provider>
    </AnswerContext.Provider>
  );
}

export default App;