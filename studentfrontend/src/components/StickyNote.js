import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';
import AnswerForm from './AnswerForm';
import Answer from './Answer';
import "./StickyNote.css";
// import { TaskCardsContext} from '../App';
// import { AnswerContext } from '../App';

const StyledPaper = styled(Paper)({
  backgroundColor: "LightPink",
  height: '100%',
  width: 300,
  padding: 8,
  marginRight: 130,
  marginLeft: 130,
  marginTop: 100,
  marginBottom: 100,
});

// TListコンポーネント
export const StickyNote = (props) => {
  // カスタムフックで定義した状態をコンテキストを通じて取得
  // const { state } = useContext(TaskCardsContext);
  // const [answers,setAnswers] = useContext(AnswerContext);
 
  return (
    <StyledPaper>
      <div class="center">
        <img src='https://frame-illust.com/fi/wp-content/uploads/2015/01/6ebb4091a951c8bd25ba696145f68148.png'></img>
        <h1>{props.id} : {props.title}</h1>
      </div>
      <div>
        <Answer />
      </div>
      <div class="center">
        <AnswerForm />
      </div>
    </StyledPaper>
  );
};
