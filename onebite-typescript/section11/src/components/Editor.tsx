import { useState } from "react";

interface Props {
  onClickAdd: (text: string) => void;
}

export default function Editor(props: Props) {
  const [text, setText] = useState("");

  // e의 타입은 추론된 타입을 참고해서 지정하면 됨.
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    props.onClickAdd(text);
    setText("");  // 입력 폼 비우기
  };

  return (
    <>
      <input 
        value={text} 
        onChange={onChangeInput}
      />
      <button onClick={onClickButton}>추가</button>
    </>
  );
}