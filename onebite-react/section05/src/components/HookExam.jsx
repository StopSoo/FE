import useInput from "../hooks/useInput";
// 1. 훅은 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 훅은 조건부(반복문, 조건문)로 호출될 수는 없다.
// 3. 커스텀 훅을 직접 만들 수 있다.

const HookExam = () => {
  const [input, onChange] = useInput();

  return (
    <div>
      <input value={input} onChange={onChange} />
    </div>
  );
}

export default HookExam;