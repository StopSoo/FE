import * as MyRouter from "../lib/MyRouter";
// TODO: MyLayout 연동
// a -> Link 변경: 서버로 요청하지 않고 브라우저에서 이동
const NavBar = () => {
  const match = MyRouter.useMatch();

  return (
    <nav className="Navbar">
      <MyRouter.Link className={match("/") ? "active" : ""} to="/">
        메뉴목록
      </MyRouter.Link>
      <MyRouter.Link className={match("/order") ? "active" : ""} to="/order">
        주문내역
      </MyRouter.Link>
    </nav>
  );
};

export default NavBar;
