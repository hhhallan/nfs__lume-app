import styled from "styled-components";

export default function ListContainer({children, title}) {
    return (
        <ListContainerStyled>
            {title && <span className={"list-title"}>{title}</span>}
            <ul>
                {children}
            </ul>
        </ListContainerStyled>
    );
}

const ListContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  span.list-title {
    font-size: 1.2rem;
    margin-left: 10px;
    color: #A0A0A0;
    font-weight: 600;
    text-transform: uppercase;
  }

  ul {
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    border: 1px solid #E8E8E8;
    list-style: none;
    overflow: hidden;

    li {
      background-color: #F5F5F5;
      padding: 15px 30px;
      width: 100%;

      &:nth-child(odd) {
        background-color: #fff;
      }
    }
  }
`;