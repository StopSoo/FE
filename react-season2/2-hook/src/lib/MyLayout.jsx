import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "../components/BackDrop";
import Dialog from "../components/Dialog";

const layoutContext = React.createContext({});
layoutContext.displayName = "LayoutContext";

export const Layout = ({ children }) => {
  const [dialog, setDialog] = React.useState();

  return (
    <layoutContext.Provider value={{ dialog, setDialog }}>
      {children}
    </layoutContext.Provider>
  );
};

export const useDialog = () => {
  const { dialog, setDialog } = useContext(layoutContext);

  const openDialog = (element) => setDialog(element);
  const closeDialog = () => setDialog(null);

  return { dialog, openDialog, closeDialog };
};

export const useLoading = () => {
  const { openDialog, closeDialog: finishLoading } = useDialog();
  const startLoading = (message) => openDialog(<Dialog>{message}</Dialog>);
};

export const DialogContainer = () => {
  const { dialog } = useContext(layoutContext);

  return (
    dialog &&
    ReactDOM.createPortal(
      <Backdrop>{dialog}</Backdrop>,
      document.querySelector("#dialog")
    )
  );
};
