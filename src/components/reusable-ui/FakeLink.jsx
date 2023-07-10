import {useNavigate} from "react-router-dom";
import styled from "styled-components";

export default function FakeLink({children, href}) {
    const navigate = useNavigate();


    return (
        <FakeLinkStyled onClick={() =>  navigate(href)}>
            {children}
        </FakeLinkStyled>
    );
}

const FakeLinkStyled = styled.span`
  color: #FD5E2F;
  font-weight: 600;
`;