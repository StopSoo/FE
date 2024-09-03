import "./Main.css";

/* JSX 주의사항 */
// 1. 중괄호 내부에는 오로지 자바스크립트 표현식만 넣을 수 있다.
// - 조건문, 반복문은 불가능.
// 2. 숫자, 문자열, 배열 값만 렌더링된다.
// - boolean, undefined, null은 오류를 발생시키지는 않지만, 화면에 출력되지 않음.
// - 객체 자체는 화면에 렌더링할 수 없으며, 객체의 특정 value 값은 렌더링 가능.
// 3. 모든 태그는 닫혀 있어야 한다. 
// 4. 최상위 태그는 반드시 하나여야 한다.
// - <></>와 같이 빈 태그를 사용한다면, 내부 요소들이 흩뿌려진 상태로 됨.
// - 특정 태그를 사용한다면, 내부 요소들이 해당 태그로 묶이게 됨.

function Main() {
  const user = {
    name: "정지수",
    isLogin: true,
  };

  // return (
  //   <>
  //     { user.isLogin 
  //     ? (<div>로그아웃</div>)
  //     : (<div>로그인</div>)}
  //   </>
  // );

  // 1. style 속성에 객체를 전달하기 위해 중괄호를 두 번 사용.
  // - Ex> <div style={{}}></div>
  // - Camel Case 표기법을 사용(!) => 기존 CSS 문법과 다름.
  // 2. CSS 파일을 별도로 생성하고 import한 후, 해당 css 문법을 'className'이라는 예약어로 적용.
  // - 가독성을 위함.
  if (user.isLogin) {
    return <div className="logout">로그아웃</div>
  } else {
    return <div>로그인</div>
  }
}

export default Main;