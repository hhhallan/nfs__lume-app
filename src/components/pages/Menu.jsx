import styled from "styled-components";

export default function Menu({ show }) {
    return (
        <MenuStyled show={show}>
            menu
        </MenuStyled>
    );
}

const MenuStyled = styled.div`
  position: fixed;
  left: ${(props) => (props.show ? "0" : "-255px")};
  top: 0;
  background-color: red;
  transition: 0.3s;

  width: 255px;
  height: 100vh;
`;