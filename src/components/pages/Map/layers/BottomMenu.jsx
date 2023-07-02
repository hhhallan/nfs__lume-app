import styled from "styled-components";

export default function BottomMenu({children}) {
    return (
        <BottomMenuStyled>
            <div className="top-bar"/>
            {children}
            <div className="bottom-bar"/>
        </BottomMenuStyled>
    );
}

const BottomMenuStyled = styled.div`
  width: 100%;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  border-radius: 20px 20px 0 0;
  padding: 0 20px;

  .top-bar {
    height: 20px;
  }

  .bottom-bar {
    height: 34px;
    background-color: red;
    margin-top: 10px;
  }
`;