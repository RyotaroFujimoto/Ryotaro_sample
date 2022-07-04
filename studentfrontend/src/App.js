import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Register from "./components/Register";
import { useState } from 'react';
import Home from "./components/Home";
import Guide from "./components/Guide";
import SolvedAnswer from "./components/SolvedAnswer";


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
            <Route exact path="/" element={<Home />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Guide" element={<Guide />} />
            <Route path="/SolvedAnswer" element={<SolvedAnswer />} />
          </Routes>
        </BrowserRouter>
      </QuestionContext.Provider>
    </AnswerContext.Provider>
  );
}

export default App;