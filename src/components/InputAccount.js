import styled from "styled-components";

const InputAccount = () => {
  return (
    <Wrapper>
      <form>
        <input type="date" />
        <input type="date" />
        <select>
          <option>utilities</option>
          <option>test</option>
          <option>test2</option>
        </select>
        <input type="text" placeholder="suplyer" />
        <input type="number" placeholder="value" />
        <button className="btn">submit</button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 90vw;
  max-width: 65rem;
  background: var(--white);
  border-radius: var(--borderRadius);
  box-shadow: var(--shadow-2);
  padding: 2rem 2.5rem;
  margin: 3rem auto;
  transition: var(--transition);

  form {
    display: flex;
    justify-content: space-evenly;
  }
  input,
  select {
    padding: 0.375rem 0.75rem;
    border-radius: var(--borderRadius);
    background: var(--backgroundColor);
    border: 1px solid var(--grey-200);
  }
`;
export default InputAccount;
