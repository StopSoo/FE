/* Props */
// 0. props는 부모 컴포넌트에서 자식 컴포넌트 방향으로만 전달 가능.
// 1-1. 매개변수로 props를 설정. => 점 표기법을 이용해 value들을 사용해야 함.
// 1-2. 객체의 구조 분해 할당 문법을 이용. => value들을 직접적으로 사용할 수 있음.
// 2. props의 property 수가 많을 경우 props를 따로 객체로 선언하고, component에서 spread 연산자를 사용해서 적용하기.
// - Ex> <Button {...buttonProps} />
// 3. component 사이에 넣는 값은 자동으로 children이라는 props로 저장됨.
function Button({text, color, children}) {
  return <button style={{ color: color }}>
    {text}
    {children}
  </button>
}

// props의 값이 undefined일 경우 오류가 발생하게 됨.
// 따라서 defaultProps를 통해 기본 값을 설정해줌.
Button.defaultProps = {
  color: "black",
};

export default Button;