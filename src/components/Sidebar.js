import { BiBarcodeReader } from "react-icons/bi";
import { BsCashCoin, BsPersonLinesFill } from "react-icons/bs";
import { CgArrowsExchange } from "react-icons/cg";
import { HiOutlineShoppingCart } from "react-icons/hi";

import styled from "styled-components";

const Sidebar = () => {
  return (
    <Wrapper>
      {icons.map((item) => {
        const { id, icon, title } = item;
        return (
          <div className="icon-container" key={id}>
            <div className="icon">{icon}</div>
            <p>{title}</p>
            <hr />
          </div>
        );
      })}
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.aside`
  background: var(--primary-500);
  height: calc(100% - 6rem);
  min-height: 100vh;
  width: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 0.5rem;

  .icon-container {
    width: fit-content;
    text-align: center;
  }
  .icon {
    color: var(--primary-100);
    font-size: 2.5rem;
  }
  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: var(--primary-100);
    text-transform: capitalize;
    margin: 0;
    padding: 0 auto;
  }
`;

const icons = [
  {
    id: 1,
    title: "payables",
    icon: <BiBarcodeReader />,
  },
  {
    id: 2,
    title: "receivables",
    icon: <BsCashCoin />,
  },
  {
    id: 3,
    title: "cash-flow",
    icon: <CgArrowsExchange />,
  },
  {
    id: 4,
    title: "suppliers",
    icon: <HiOutlineShoppingCart />,
  },
  {
    id: 5,
    title: "clients",
    icon: <BsPersonLinesFill />,
  },
];
