// import './App.css';
// import Appbar from './components/Appbar';
// import React from "react";


// function App() {
//   return (
//     <div className="App">
//       <Appbar/>
//       <h1>Q&A</h1>
//     </div> 
//   );
// }

// export default App;

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


const StyledBox = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  });

export const TaskCardsContext = React.createContext();

function App() {
  const count = useSelector((state) => state.count);
  return (
    <TaskCardsContext.Provider value={useTaskCardsState(taskCards)}>
      <BrowserRouter>
        <div className="App">
          <Appbar/>
          <h1>質問数: {taskCards.length}</h1>
          <StyledBox>
            <TList title="議事録の取り方がわかりません" categoryId={0} />
            <TList title="Slackの使い方がわかりません" categoryId={1} />
            <TList title="転職の仕方がわかりません" categoryId={2} />
            <TList title="転職の仕方がわかりません" categoryId={3} />
            <TList title="転職の仕方がわかりません" categoryId={4} />
            <TList title="転職の仕方がわかりません" categoryId={5} />
            <TList title="転職の仕方がわかりません" categoryId={6} />
            <TList title="転職の仕方がわかりません" categoryId={7} />
            <TList title="転職の仕方がわかりません" categoryId={8} />
            <TList title="転職の仕方がわかりません" categoryId={9} />
            <TList title="転職の仕方がわかりません" categoryId={10} />
          </StyledBox>
        </div>
        
        {/* <Routes>
          <Route path="/board" element={<TBoard />} />
        </Routes> */}
        
      </BrowserRouter>
    </TaskCardsContext.Provider>
  );
}

export default App;