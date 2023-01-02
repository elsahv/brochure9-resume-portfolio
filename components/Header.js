import {
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: solid 2px #000;
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
`;

export const Logo = styled.h1`
  padding-top: 10px;
  padding-left: 10px;
  font-size: 32px;
  // background: green;
  color: #000;
  @media only screen and (max-width: 599px) {
    font-size: 25px;
  }
`;

export const Nav = styled.nav``;
export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  padding-top: 15px;
  font-size: 30px;
  a {
    margin: 0 5px;
    color: #000;
    text-decoration: none;
    &:hover {
      color: teal;
      transition: 1s;
    }
  }
`;
export const SmIcons = styled.div`
  font-size: 30px;
  display: flex;
  padding-top: 5px;
  padding-left: 5px;

  a {
    margin: 0 3px;
  }

  @media only screen and (max-width: 1024px) {
    font-size: 40px;
    margin: 10px 0;
  }
`;

export const AboutImgWrapper = styled.div`
  width: 670px;
  grid-area: ls;
  padding-top: 405px;
  @media only screen and (max-width: 1024px) {
    padding-top: 785px;
  }
  @media only screen and (max-width: 834px) {
    padding-top: 575px;
  }
  @media only screen and (max-width: 810px) {
    padding-top: 395px;
  }
  @media only screen and (max-width: 800px) {
    padding-top: 595px;
  }

  @media only screen and (max-width: 600px) {
    padding: 0;
  }
`;

export const MobileIntro = styled.div`
  display: none;
  @media only screen and (max-width: 600px) {
    display: block;
  }
`;

const HeaderSection = () => {
  return (
    <>
      <Header>
        <Logo>Elsa Hovey</Logo>
        <Nav>
          <NavMenu>
            {/* <Link href="/">home</Link> */}
            {/* <Link href="/#work">work</Link> */}
            {/* <Link href="/">blog</Link> */}
            {/* <Link href="/#contact">contact</Link> */}

            <a href="https://google.com">
              <AiOutlineMail />
            </a>
            <a href="https://linkedin.com">
              <AiFillLinkedin />
            </a>
            <a href="https://instagram.com">
              <AiOutlineInstagram />
            </a>
          </NavMenu>
        </Nav>
      </Header>
    </>
  );
};

export default HeaderSection;
