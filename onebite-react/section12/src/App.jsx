import "./App.css";
import { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Notfound from "./pages/Notfound";
import Edit from "./pages/Edit";
// 1. "/": 모든 일기를 조회하는 Home 페이지
// 2. "/new": 새로운 일기를 작성하는 New 페이지
// 3. "/diary": 일기를 상세히 조회하는 Diary 페이지
// 4. "*": 위 페이지들에 해당하지 않으면 해당 페이지를 반환

// 주의사항 1) Routes 컴포넌트 내부에는 Route 컴포넌트만 들어갈 수 있음.
// 주의사항 2) Routes 컴포넌트 바깥에 컴포넌트를 넣게 되면, 그 컴포넌트가 모든 페이지에 공통으로 들어감.

// 정리 1) 링크가 필요할 때는 Link 컴포넌트 활용하기
// 정리 2) 이벤트 핸들러 함수에서 페이지 이동이 필요할 때는 useNavigate를 활용하기.
// 정리 3) Link 컴포넌트와 useNavigate 모두 CSR을 이용한다.
const mockData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    emotionId: 2,
    content: "2번 일기 내용",
  },
  {
    id: 3,
    createdDate: new Date().getTime(),
    emotionId: 3,
    content: "3번 일기 내용",
  },
];

function reducer(state, action) {
  return state;
}

function App() {
  // useReducer(reducer 함수, data의 초기값)
  const [data, dispatch] = useReducer(reducer, mockData);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
