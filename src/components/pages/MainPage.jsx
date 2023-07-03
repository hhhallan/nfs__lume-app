import styled from "styled-components";
import {Menu} from "../index.js";
import {useState} from "react";

export default function MainPage({children}) {
    const [showMenu, setShowMenu] = useState(false);

    const handleShow = () => {
        setShowMenu(!showMenu);
    }

    const handleClick = (e) => {
        // console.log(e.target)
        // setShowMenu(false)
    }

    return (
        <PageStyled onClick={handleClick}>
            <Menu key="menu" show={showMenu}/>
            <div className="btn" onClick={handleShow}/>
            {children}
        </PageStyled>
    );
}

const PageStyled = styled.div`
  padding: 20px 20px 0;
  background: lightgreen;
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