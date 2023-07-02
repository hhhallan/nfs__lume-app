import styled from "styled-components";
import MenuContent from "./MenuContent.jsx";
import Stats from "./Stats.jsx";
import NavItem from "./NavItem.jsx";

export default function Menu({show}) {
    return (
        <MenuStyled show={show}>
            <div className="profile">
                <h3>Bonjour user</h3>
                <p>Voir le profil</p>
            </div>

            <MenuContent title={"Statistiques"}>
                <Stats
                    icon={"distance"}
                    title={"kilomètres"}
                    stats={"23,6"}
                />

                <Stats
                    icon={"scooter"}
                    title={"trajets"}
                    stats={"13"}
                />
            </MenuContent>

            <MenuContent title={"Navigation"} isVertical>
                <NavItem
                    icon={"card"}
                    title={"Paiements"}
                    url={"paiements"}
                />
                <NavItem
                    icon={"history"}
                    title={"Mes trajets"}
                    url={""}
                />
                <NavItem
                    icon={"security"}
                    title={"Sécurité"}
                    url={""}
                />
                <NavItem
                    icon={"help"}
                    title={"Aide"}
                    url={""}
                />
                <NavItem
                    icon={"settings"}
                    title={"Paramètres"}
                    url={""}
                />
            </MenuContent>
        </MenuStyled>
    );
}

const MenuStyled = styled.div`
  position: fixed;
  left: ${(props) => (props.show ? "0" : "-255px")};
  //left: 0;
  top: 0;
  background-color: #fff;
  transition: 0.3s;

  width: 255px;
  height: 100vh;

  padding: 60px 30px;

  display: flex;
  flex-direction: column;
  gap: 30px;

  p {
    font-size: 1.6rem;
    color: #7F7F7F;
  }

  .profile {
    h3 {
      font-size: 2rem;
      font-weight: 600;
    }
  }
`;