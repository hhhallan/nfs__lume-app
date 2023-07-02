import styled from "styled-components";

export default function MenuContent({children, title, isVertical = false}) {
    return (
        <MenuContentStyled isVertical={isVertical}>
            <p>{title}</p>
            <div className={"container"}>
                {children}
            </div>
        </MenuContentStyled>
    );
}

const MenuContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .container {
    display: flex;
    ${(props) => 
            props.isVertical ? 
                    `
      flex-direction: column;
      gap: 20px;
    ` : `
      align-items: center;
      gap: 30px;
    `
    }
  }
`;