import styled from "styled-components";

export default function LoginPage() {
    return (
        <LoginStyled>
            <h2>Connexion</h2>

            <form action="">
                <div className="full-line"> {/*si pas "full-line" => deux input cote a cote*/}
                    <div className="input-block">
                        <div className="input">
                            <label htmlFor="">label</label>
                            <input type="text"/>
                        </div>
                        <span>error</span>
                    </div>
                </div>

                <button type={"submit"}>submit</button>
            </form>
        </LoginStyled>
    );
}

const LoginStyled = styled.div`
  
`;