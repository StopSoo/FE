// TODO: MyLayout, MyRouter 연동
const NavBar = ({ match }) => {
  return (
    <nav className="Navbar">
      <a className={"active"} href="/">
        메뉴목록
      </a>
      <a href="/order">주문내역</a>
    </nav>
  );
};

export default NavBar;
