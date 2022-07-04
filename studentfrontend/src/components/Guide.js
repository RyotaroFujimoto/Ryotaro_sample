import React from 'react';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { height, padding, styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { autocompleteClasses } from '@mui/material';

const StyledPaper = styled(Paper)({
    width: '300px',
    height: '200px',
    margin: 'auto',
    padding: '10px',
    marginTop: '400px',
    });

const StyledButton = styled(Button)({
margin: '5px',
});
    
  
const Guide = () => {
    const navigate = useNavigate();
    const handleReturnClick = () => {
        navigate('/');
        }    
  return(
    <div>
      <StyledPaper>
        <Typography component="h1" variant="h5">
          ガイドを表示
        </Typography>
        <StyledButton variant="outlined" color="primary" onClick={handleReturnClick}>
              戻る
        </StyledButton>
      </StyledPaper>
    </div>
  )
}

export default Guide;