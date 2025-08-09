// 간단한 회원 가입 폼
// 이름, 생년월일, 국적, 자기소개
import { useState } from "react";

const Register = () => {
  // state 별로 따로 useState 사용했던 것을 하나의 객체로 초기화하는 방식으로 변경 (!)
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });
  // 통합 이벤트 핸들러
  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <input name="name" value={input.name} onChange={onChange} placeholder={"이름"} />
      </div>
      <div>
        <input name="birth" value={input.birth} type="date" onChange={onChange} />
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
        <textarea name="bio" value={input.bio} onChange={onChange} placeholder={"자기소개"} />
      </div>
    </div>
  );
}

export default Register;