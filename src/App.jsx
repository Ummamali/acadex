import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Ledger from "./Components/Ledger/Ledger";
import Modal from "./Components/utils/Modal/Modal";
import ModalCtxProvider from "./Components/CustomModals/ModalCtxProvider";
import ModalsContainer from "./Components/CustomModals/ModalsContainer";
import ControllerCtxProvider from "./Components/utils/ControllerCtxProvider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ModalCtxProvider>
      <ControllerCtxProvider>
        <ModalsContainer />
        <Header />
        <Ledger />
      </ControllerCtxProvider>
    </ModalCtxProvider>
  );
}

export default App;
