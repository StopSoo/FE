import "./Main.css"; // css 파일은 이와 같이 import하면 된다.
// JSX 주의사항
// 1. 중괄호 내부에는 JS 표현식만 넣을 수 있다.
// 2. 숫자, 문자열, 배열 값만 정상 렌더링된다.
// 3. 모든 태그는 닫혀 있어야 한다.
// 4. 최상위 태그는 반드시 하나여야 한다.
function Main() {
  const user = {
    name: "정지수",
    isLogin: true,
  };
  // 조건에 따라 다른 문자열을 렌더링
  return (
    <>
      {user.isLogin ? (
        <div className="logout">로그아웃</div>
      ) : (
        <div>로그인</div>
      )}
    </>
  );
}

export default Main;
