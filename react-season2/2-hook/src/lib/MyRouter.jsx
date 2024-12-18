import React from "react";

const routerContext = React.createContext({});
routerContext.displayName = "RouterContext";

export const Router = ({ children }) => {
  const [path, setPath] = React.useState(window.location.pathname);

  const changePath = (path) => {
    setPath(path);
    window.history.pushState({ path }, "", path);
  };

  const handlePopstate = (event) => {
    const nextPath = event.state && event.state.path;
    if (!nextPath) return;
    setPath(nextPath);
  };

  React.useEffect(() => {
    // class 컴포넌트에서 componentDidMount()
    window.addEventListener("popstate", handlePopstate);
    window.history.replaceState({ path }, "");
    // class 컴포넌트에서 componentWillUnmount() => clean 함수로 전달
    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, []);

  const contextValue = {
    path,
    changePath,
  };

  return (
    <routerContext.Provider value={contextValue}>
      {children}
    </routerContext.Provider>
  );
};
// 전달 받은 Route 컴포넌트들 중 현재 경로에 해당하는 Route를 렌더링
export const Routes = ({ children }) => {
  const { path } = React.useContext(routerContext);

  let selectedRoute = null;

  React.Children.forEach(children, (child) => {
    // element인지 검사
    if (!React.isValidElement(child)) return;
    // fragment인지 검사
    if (child.type === React.Fragment) return;
    // Route 컴포넌트인지 검사
    if (!child.props.path || !child.props.element) return;
    // Route에 등록된 컴포넌트가 요청한 경로에 해당하는지 검사
    // 요청 경로에서 쿼리 문자열을 제거하고 비교
    if (child.props.path !== path.replace(/\?.*$/, "")) return;

    selectedRoute = child.props.element;
  });

  return selectedRoute;
};

export const Route = () => null;

export const Link = ({ to, ...rest }) => {
  const { path, changePath } = React.useContext(routerContext);

  const handleClick = (e) => {
    e.preventDefault();
    if (to !== path) changePath(to);
  };

  return <a {...rest} href={to} onClick={handleClick} />;
};

/* Custom Hook: 내부에서 리액트 훅을 사용 */
export const useNavigate = () => {
  const { path, changePath } = React.useContext(routerContext);
  const navigate = (nextPath) => {
    if (path !== nextPath) changePath(nextPath);
  };

  return navigate;
};

export const useMatch = () => {
  const { path } = React.useContext(routerContext);
  const match = (comparePath) => path === comparePath;
  return match;
};

export const useParams = () => {
  // TODO: useMemo 사용
  const params = new URLSearchParams(window.location.search);
  const paramObject = {};
  for (const [key, value] of params) {
    paramObject[key] = value;
  }
  return paramObject;
};
