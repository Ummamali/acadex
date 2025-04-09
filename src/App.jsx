import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Ledger from "./Components/Ledger/Ledger";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Ledger />
    </>
  );
}

export default App;
