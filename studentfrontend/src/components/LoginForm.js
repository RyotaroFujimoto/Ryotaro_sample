import React from 'react';
import { Paper, TextField, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledPaper = styled(Paper)({
  width: '300px',
  height: '200px',
  margin: 'auto',
  padding: '10px',
});

const StyledTextField = styled(TextField)({
  width: '80%'
});

const StyledButton = styled(Button)({
  margin: '15px'
});

const LoginForm = () => {
  return (
    <div>
      {/* Paperは他のコンポーネントを乗せる土台的コンポーネント */}
      <StyledPaper elevation={5}>
        {/* Typographyはテキストコンテンツ用のコンポーネント。
      variantの設定により大きさを指定する */}
        <Typography>ログインしてください。</Typography>
        {/* TextFieldは入力欄とラベルがセットになったコンポーネント。
      labelは画面表記されるラベルの内容 */}
        <StyledTextField label="Name" variant="standard" />
        <StyledTextField label="Password" variant="standard" />
        {/* Buttonコンポーネントを利用 variantは外見の指定、colorは色の指定 */}
        <StyledButton
          variant="contained"
          color="primary"
        >
          ログイン
        </StyledButton>
      </StyledPaper>
    </div>
  );
};
export default LoginForm;
