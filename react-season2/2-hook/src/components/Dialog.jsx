import React, { useEffect } from "react";
import MyReact from "../lib/MyReact";

const Dialog = ({ header, children, footer }) => {
  const footerRef = MyReact.useRef(null);
  // DOM을 직접 건드리기 때문에 부수 효과로 처리할 것.
  useEffect(() => {
    if (!footerRef.current) return;
    // footer에서 button을 모두 찾는데, 유사 배열이므로 Array로 만듬.
    const buttons = Array.from(footerRef.current.querySelectorAll("button"));

    if (!buttons.length === 0) return;
    const activeButton = buttons[buttons.length - 1]; // 가장 오른쪽 버튼
    activeButton.focus();
  }, [footerRef.current]);

  return (
    <div className="Dialog">
      {header && <header>{header}</header>}
      <main>{children}</main>
      {footer && <footer ref={footerRef}>{footer}</footer>}
    </div>
  );
};

export default Dialog;
