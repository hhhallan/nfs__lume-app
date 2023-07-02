import styled from "styled-components";
import {useNavigate} from "react-router-dom";

export default function NavItem({icon, title, url}) {
    const navigate = useNavigate();
    const formattedTitle = title
        .toLowerCase()
        .replace(/\s/g, "-")
        .replace(/é/g, "e")
        .replace(/è/g, "e");

    const handleClick = () => {
        navigate(`/${formattedTitle}`);
    }

    return (
        <NavItemStyled onClick={handleClick}>
            <img src={`/icons/${icon}.svg`} alt=""/>
            <span>{title}</span>
        </NavItemStyled>
    );
}

const NavItemStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #3F3F3F;

  span {
    font-size: 2rem;
    font-weight: 600;
  }
`;