const App = () => <>2-hook</>;

export default App;
// 클래스
class Contract {
  constructor(name) {
    this.name = name;
  }

  sign() {
    const capturedName = this.name;
    setTimeout(() => console.log("서명인: ", capturedName), 3000);
  }
}

// const contract = new Contract("사용자1"); // 인스턴스를 생성
// contract.sign();
// contract.name = "사용자2"; // setTimeOut 함수 실행 전에 변수 값이 변경됨

// 함수
function createContract(name) {
  const sign = () => {
    setTimeout(() => console.log("서명인: ", name), 3000);
  };
  return { sign };
}

const contract = createContract("사용자3"); // 클래스와 다르게 변수 값 변경 불가능
contract.sign();
