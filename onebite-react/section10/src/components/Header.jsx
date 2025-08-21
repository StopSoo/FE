import "./Header.css";
import { memo } from "react";

const Header = () => {
  return (
    <div className="Header">
      <h3>오늘은 📆</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};
// memo 메서드는 인수로 받은 컴포넌트가 props가 변경되지 않았을 때는 컴포넌트가 리렌더링되지 않도록 함.
export default memo(Header);