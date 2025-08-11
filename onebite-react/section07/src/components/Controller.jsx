// 주의사항: onClick 속성으로 함수를 넘길 때 화살표 함수로 넘겨야 한다(!)
const Controller = ({ onChangeCount }) => {
  return (
    <div>
      <button onClick={() => onChangeCount(-1)}>-1</button>
      <button onClick={() => onChangeCount(-10)}>-10</button>
      <button onClick={() => onChangeCount(-100)}>-100</button>
      <button onClick={() => onChangeCount(100)}>+100</button>
      <button onClick={() => onChangeCount(10)}>+10</button>
      <button onClick={() => onChangeCount(1)}>+1</button>
    </div>
  );
};

export default Controller;
