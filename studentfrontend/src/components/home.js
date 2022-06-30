import React from "react";
import styled from "@emotion/styled";
import TList from "./TList";
import { Box } from "@mui/system";

const StyledBox = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  });

const home = () =>{
    return(
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
    );
}

export default home;