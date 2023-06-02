import styled from "styled-components";


export default function NavBar() {
    

    return(
      <>
      <NavContainer>
        <Logo>Linkr</Logo>
      <Profile>
        <ion-icon name="chevron-down-outline" color="white"></ion-icon>
        <img></img>
      </Profile>
      </NavContainer>
      </>

    )
}

const Logo = styled.h1`
  font-family: 'Passion One';
  font-weight: 700;
  font-size: 49px;
  line-height: 54px;
  padding: 0px 10px;
  cursor: pointer;
  color: #ffffff;
`;
const  NavContainer  = styled.nav`
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px;
  top: 0;
  left: 0;
  position: fixed;
  background-color: #151515;
  z-index: 2;


` 
const Logout = styled.div`
 width: 150px;
  height: 47px;
  background-color: #171717;
  border-radius: 0px 0px 0px 15px;
  color:white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 72px;
  right: 0px;
  z-index: 2;
  cursor: pointer;


`
const Profile = styled.div`
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;

   img{
    width: 53px;
    height: 53px;
    border-radius: 26.5px;
    margin-right: 30px;
   }

` 