import { useReducer } from "react";

// 상태를 실제로 변화시키는 변환기 역할
function reducer(state, action) {
  switch (action.type) {
    case "INCREASE": return state + action.data;
    case "DECREASE": return state - action.data;
    default: return state;
  }
}

const Exam = () => {
  // useReducer: useState와 비슷한 기능을 하나, 외부 함수에서도 state를 관리할 수 있게 함.
  // 인수1: 변환기 함수
  // 인수2: state의 초기값
  const [state, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {
    // 인수: 상태가 어떻게 변화되기를 원하는지가 포함된 액션 객체를 전달
    dispatch({
      type: "INCREASE",
      data: 1,
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1,
    })
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>  
      <button onClick={onClickMinus}>-</button>
    </div>
  );
}

export default Exam;