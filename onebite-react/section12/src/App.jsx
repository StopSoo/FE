import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Notfound from "./pages/Notfound";
// 1. "/": 모든 일기를 조회하는 Home 페이지
// 2. "/new": 새로운 일기를 작성하는 New 페이지
// 3. "/diary": 일기를 상세히 조회하는 Diary 페이지
// 4. "*": 위 페이지들에 해당하지 않으면 해당 페이지를 반환

// 주의사항 1) Routes 컴포넌트 내부에는 Route 컴포넌트만 들어갈 수 있음.
// 주의사항 2) Routes 컴포넌트 바깥에 컴포넌트를 넣게 되면, 그 컴포넌트가 모든 페이지에 공통으로 들어감.

// 정리 1) 링크가 필요할 때는 Link 컴포넌트 활용하기
// 정리 2) 이벤트 핸들러 함수에서 페이지 이동이 필요할 때는 useNavigate를 활용하기.
// 정리 3) Link 컴포넌트와 useNavigate 모두 CSR을 이용한다.
function App() {
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate("/new");
  };

  return (
    <>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
      </div>
      <button onClick={onClickButton}>New 페이지로 이동</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
