import Page from "./Page.jsx";
import styled from "styled-components";

export default function TestPage() {
    return (
        <Page>
            <TestStyled>
                <h1>ceci est un test</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dolorem enim ex illo inventore itaque molestiae soluta temporibus. Eius iusto laborum, libero minima nisi non nostrum saepe tempora voluptates voluptatibus.</p>
            </TestStyled>
        </Page>
    );
}

const TestStyled = styled.div`
  
`;