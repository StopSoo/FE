import React from "react";
import Dialog from "../components/Dialog";
import Backdrop from "../components/BackDrop";
// dialog를 사용하기 위해 layout에 대한 context를 생성
export const layoutContext = React.createContext({});
layoutContext.displayName = "LayoutContext";

export class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dialog: <Dialog />,
    };
  }

  render() {
    const value = {
      dialog: this.state.dialog,
    };

    return (
      <layoutContext.Provider value={value}>
        {this.props.children}
      </layoutContext.Provider>
    );
  }
}

export const DialogContainer = () => (
  <layoutContext.Consumer>
    {({ dialog }) => dialog && <Backdrop>{dialog}</Backdrop>}
  </layoutContext.Consumer>
);
