import styled from "styled-components";
import { ItemAccount } from "../components";

const ListAccounts = () => {
  return (
    <Wrapper>
      <hr />
      <ItemAccount />
      <ItemAccount />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 75%;
  margin: 0 auto;
`;

export default ListAccounts;
