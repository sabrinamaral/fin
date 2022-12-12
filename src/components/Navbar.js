import styled from "styled-components";
import logo from "../assets/images/logo.png";
import { FaBars } from "react-icons/fa";

const Navbar = ({ handleClick }) => {
  return (
    <Wrapper>
      <button onClick={handleClick} className="bars" type="button">
        <FaBars />
      </button>
      <div>
        <img src={logo} alt="logo" className="img" />
      </div>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.nav`
  background-color: var(--white);
  width: 100wv;
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: var(--shadow-3);

  img {
    width: 160px;
    margin-right: 2rem;
  }
  .bars {
    background-color: transparent;
    border-color: transparent;
    margin-left: 2rem;
    font-size: 2rem;
    color: var(--primary-500);
    transition: var(--transition);
  }
  span:hover {
    transform: scale(1.2);
  }
`;
