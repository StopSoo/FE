import { useState } from "react";
// use를 접두어로 사용해서 커스텀 훅 제작
function useInput() {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
}

export default useInput;