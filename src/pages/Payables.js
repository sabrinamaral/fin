import { InputAccount, ListAccounts } from "../components";
const options = [
  { label: "rent", value: "Rent" },
  { label: "utilities", value: "Utilities" },
  { label: "raw-material", value: "Raw Material" },
  { label: "salaries", value: "Salaries" },
];

const Payables = () => {
  return (
    <div>
      <InputAccount
        options={options}
        placeholder="supplier"
        placeholder2="value"
        btn_name="submit"
      />
      <ListAccounts />
    </div>
  );
};

export default Payables;
