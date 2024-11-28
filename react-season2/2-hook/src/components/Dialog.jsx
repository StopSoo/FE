import React from "react";

class Dialog extends React.Component {
  constructor(props) {
    super(props);
    this.footerRef = React.createRef();
  }

  componentDidMount() {
    if (!this.footerRef.current) return;
    // footer에서 button을 모두 찾는데, 유사 배열이므로 Array로 만듬.
    const buttons = Array.from(
      this.footerRef.current.querySelectorAll("button")
    );
    
    if (!buttons.length === 0) return;
    const activeButton = buttons[buttons.length-1]; // 가장 오른쪽 버튼
    activeButton.focus();
  }

  render() {
    const { header, children, footer } = this.props;

    return (
      <div className="Dialog">
        {header && <header>{header}</header>}
        <main>{children}</main>
        {footer && <footer ref={this.footerRef}>{footer}</footer>}
      </div>
    );
  }
}

export default Dialog;
