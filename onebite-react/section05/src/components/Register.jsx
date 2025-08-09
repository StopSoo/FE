// 간단한 회원 가입 폼
// 이름, 생년월일, 국적, 자기소개
import { useState, useRef } from "react";

const Register = () => {
  // state 별로 따로 useState 사용했던 것을 하나의 객체로 초기화하는 방식으로 변경 (!)
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });
  // 전역변수 사용 대신 useRef() 사용하기
  const countRef = useRef(0);
  const inputRef = useRef();
  // 통합 이벤트 핸들러
  // 객체의 필드에 변수를 사용할 때 JS문법 -> []를 사용하기
  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      // 이름을 입력하는 DOM 요소 포커스
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <input
          name="name"
          ref={inputRef}
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
      </div>
      <div>
        <input
          name="birth"
          value={input.birth}
          type="date"
          onChange={onChange}
        />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea
          name="bio"
          value={input.bio}
          onChange={onChange}
          placeholder={"자기소개"}
        />
      </div>

      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;