import React from "react";
import Dialog from "../components/Dialog";
import Backdrop from "../components/BackDrop";
import { getComponentName } from "./utils";
// dialog를 사용하기 위해 layout에 대한 context를 생성
export const layoutContext = React.createContext({});
layoutContext.displayName = "LayoutContext";

export class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dialog: <Dialog />,
    };
    // 비동기적으로 동작하기 때문에 this 바인딩
    this.setDialog = this.setDialog.bind(this);
  }

  setDialog(dialog) {
    this.setState({ dialog });
  }

  render() {
    const value = {
      dialog: this.state.dialog,
      setDialog: this.setDialog,
    };

    return (
      <layoutContext.Provider value={value}>
        {this.props.children}
      </layoutContext.Provider>
    );
  }
}
// dialog와 setDialog를 사용
export const withLayout = (WrappedComponent) => {
  const WithLayout = (props) => (
    <layoutContext.Consumer>
      {({ dialog, setDialog }) => {
        const openDialog = () => setDialog;
        const closeDialog = () => setDialog(null);
        const enhancedProps = {
          dialog,
          openDialog,
          closeDialog,
        };

        return <WrappedComponent {...props} {...enhancedProps} />;
      }}
    </layoutContext.Consumer>
  );
  WithLayout.displayName = `WithLayout(${getComponentName(WrappedComponent)})`;
  return WithLayout;
};
// dialog 상태에 따라 노출시키기
export const DialogContainer = withLayout(({dialog}) => (
  ({ dialog }) => dialog && <Backdrop>{dialog}</Backdrop>
));