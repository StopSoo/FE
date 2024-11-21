export const Link = ({ to, ...rest }) => {
  const handleClick = (e) => {
    // Link 컴포넌트의 기본 동작인 서버로 href 속성으로의 접속 요청을 보내는 것을 막음.
    // 브라우저에서 라우팅 처리를 할 수 있는 기반을 마련.
    e.preventDefault();
  };

  return <a {...rest} href={to} onClick={handleClick} />;
};
