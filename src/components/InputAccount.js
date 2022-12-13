import styled from "styled-components";

const InputAccount = ({ options, placeholder, placeholder2, btn_name }) => {
  const optionToRender = options.map((option) => {
    return <option key={option.label}>{option.value}</option>;
  });
  return (
    <Wrapper>
      <form>
        <input type="date" />
        <input type="date" />
        <select>
          <option
            key="choose-a-category"
            label="Choose a category"
            value="Choose a category"
            hidden
          ></option>
          {optionToRender}
        </select>
        <input type="text" placeholder={placeholder} />
        <input type="number" placeholder={placeholder2} />
        <button className="btn">{btn_name}</button>
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
