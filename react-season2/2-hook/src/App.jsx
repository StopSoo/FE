import React from "react";

// const App = () => <>2-hook</>;
// export default App;

// 클래스
class Contract extends React.Component {
  render() {
    // 기본적으로는 렌더링 시점의 값 고정이 불가능.
    // 따라서 아래와 같이 클로저를 이용하여 렌더링 시점의 값을 고정시키고 사용.
    const props = this.props;
    const sign = () => {
      setTimeout(() => console.log("서명인: ", props.name), 3000);
    }

    return <button onClick={sign}>서명</button>;
  }
}
// 함수
function Contract2(props) {
  // 렌더링 시점의 값을 고정시킬 수 있음(!)
  const sign = () => {
    setTimeout(() => console.log("서명인: ", props.name), 3000);
  }

  return <button onClick={sign}>서명</button>;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "사용자1",
    };
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <>
        <select value={this.state.name} onChange={this.handleChange.bind(this)}>
          <option value="사용자1">사용자1</option>
          <option value="사용자2">사용자2</option>
        </select>
        <Contract name={this.state.name} />
      </>
    );
  }
}

export default App;
