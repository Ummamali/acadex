import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Ledger from "./Components/Ledger/Ledger";
import Modal from "./Components/utils/Modal/Modal";
import ModalCtxProvider from "./Components/CustomModals/ModalCtxProvider";
import ModalsContainer from "./Components/CustomModals/ModalsContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ModalCtxProvider>
      <ModalsContainer />
      <Header />
      <Ledger />
    </ModalCtxProvider>
  );
}

export default App;
