import styled from "styled-components";

export default function Stats({ icon, title, stats }) {
    return (
        <StatsStyled>
            <img src={`/icons/${icon}.svg`} alt=""/>
            <div>
                <h4>{stats}</h4>
                <span>{title}</span>
            </div>
        </StatsStyled>
    );
}

const StatsStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 24px;
    height: 24px;
  }

  div {
    h4 {
      font-size: 3rem;
      line-height: 1;
    }

    p {
      font-size: 1rem;
      color: #7F7F7F;
    }
  }
`;