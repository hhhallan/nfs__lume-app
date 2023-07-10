import styled from "styled-components";
import {Menu} from "../index.js";
import {useState} from "react";

export default function MainPage({children, isLogged = true, style}) {
    const [showMenu, setShowMenu] = useState(false);

    const handleShow = () => {
        setShowMenu(!showMenu);
    }

    return (
        <PageStyled style={style}>
            {isLogged && (
                <>
                    <Menu key="menu" show={showMenu}/>
                    <div className="btn" onClick={handleShow}/>
                </>
            )}
            {children}
        </PageStyled>
    );
}

const PageStyled = styled.div`
  padding: 20px 20px 0;
  height: 100vh;

  .btn {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: grey;
  }
`;