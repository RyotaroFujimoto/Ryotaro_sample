import {
    Avatar,
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    Grid,
    Link,
    Paper,
    Stack,
    TextField,
    Typography
  } from "@mui/material";
  import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
  import { teal } from "@mui/material/colors";
  import styled from "@emotion/styled";
  import { useNavigate } from "react-router-dom";
  import "./Login.css";
import { findByLabelText } from "@testing-library/react";
import { ForkRight } from "@mui/icons-material";

  const StyledButton = styled(Button)({
    margin: '5px',
    });

  export const Login = () => {
    const navigate = useNavigate();
    const handleReturnClick = () => {
      navigate('/');
      };
    
    return (
      <div class='background'>
          <Paper
            elevation={3}
            sx={{
              width: '300px',
              height: '500px',
              margin: 'auto',
              padding: '10px',
              textAlign: 'center',
                        }}
          >
            <Grid
              container
              direction="column"
              justifyContent="flex-start" //多分、デフォルトflex-startなので省略できる。
              alignItems="center"
            >
              <Avatar sx={{ bgcolor: teal[400] }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography variant={"h5"} sx={{ m: "30px" }}>
                Sign In
              </Typography>
            </Grid>
            <TextField label="Username" variant="standard" fullWidth required />
            <TextField
              type="password"
              label="Password"
              variant="standard"
              fullWidth
              required
            />
            {/* ラベルとチェックボックス */}
            <FormControlLabel
              labelPlacement="end"
              label="パスワードを忘れました"
              control={<Checkbox name="checkboxA" size="small" color="primary" />}
            />
            <Box mt={3}>            
              <StyledButton type="submit" color="primary" variant="contained" fullWidth>
                サインイン
              </StyledButton>   
              <StyledButton onClick={handleReturnClick} type="submit" color="primary" variant="outlined" fullWidth>
                キャンセル
              </StyledButton>
              <Typography variant="caption">
                <Link href="#">パスワードを忘れましたか？</Link>
              </Typography>
              <Typography variant="caption" display="block">
                アカウントを持っていますか？
                <Link href="#">アカウントを作成</Link>
              </Typography>
            </Box>
          </Paper>
      </div>
    );
  };