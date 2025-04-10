import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Ledger from "./Components/Ledger/Ledger";
import Modal from "./Components/utils/Modal";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Modal />
      <Header />
      <Ledger />
    </>
  );
}

export default App;
