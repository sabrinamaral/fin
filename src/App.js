import {
  CashFlow,
  Clients,
  Dashboard,
  Error,
  Payables,
  Receivables,
  Suppliers,
} from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/cashflow" element={<CashFlow />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/payables" element={<Payables />} />
        <Route path="/receivables" element={<Receivables />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
