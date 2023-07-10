import styled from "styled-components";

export default function Divider({ margin = "20px"}) {
    return <DividerStyled margin={margin}/>
}

const DividerStyled = styled.div`
  margin: ${props => props.margin};
  margin-inline: auto;
  border-radius: 100px;
  background: #D9D9D9;
  height: 2px;
  width: 150px;
`;