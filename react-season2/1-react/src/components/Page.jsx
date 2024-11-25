import * as MyLayout from "../lib/MyLayout";
import Dialog from "./Dialog";

const Page = ({ header, footer, children }) => {
  return (
    <div className="Page">
      <header>{header}</header>
      <main>{children}</main>
      {/* <footer>{footer}</footer> */}
      <MyLayout.DialogContainer />
      <MyLayout.layoutContext.Consumer>
        {({setDialog}) => (
          <button onClick={() => {
            setDialog(<Dialog />);
          }}>
            다이얼로그 열기
          </button>
        )}
      </MyLayout.layoutContext.Consumer>
    </div>
  );
};

export default Page;
