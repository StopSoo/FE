import React from "react";
import { getComponentName } from "./utils";
// Router의 this.state.path를 전달하기 위해.
// 근데 목적지가 불분명! 어디까지 내려가야 하는지도 불분명!
export const routerContext = React.createContext({});
routerContext.displayName = "RouterContext"; // Context에 이름 붙이기

export const Link = ({ to, ...rest }) => (
  <routerContext.Consumer>
    {({ path, changePath }) => {
      const handleClick = (e) => {
        // Link 컴포넌트의 기본 동작인 서버로 href 속성으로의 접속 요청을 보내는 것을 막음.
        // 브라우저에서 라우팅 처리를 할 수 있는 기반을 마련.
        e.preventDefault();

        if (to !== path) changePath(to);
      };

      return <a {...rest} href={to} onClick={handleClick} />;
    }}
  </routerContext.Consumer>
);

export class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      path: window.location.pathname,
    };
    // 비동기로 동작하므로 this 바인딩
    this.handleChangePath = this.handleChangePath.bind(this);
    this.handleOnPopState = this.handleOnPopState.bind(this);
  }

  handleChangePath(path) {
    this.setState({ path }); // path 값을 인자 값으로 변경
    window.history.pushState({ path }, "", path); // 주소창 주소 변경
  }
  // popState 이벤트가 발행됐을 때(브라우저의 앞/뒤로 가기) 경로 변경하는 함수
  handleOnPopState(event) {
    const nextPath = event.state && event.state.path;

    if (!nextPath) return;
    this.setState({ path: nextPath });
  }

  componentDidMount() {
    // 브라우저의 앞/뒤로 가기 이벤트(popstate)가 발행되면 handleOnPopState 함수를 실행
    window.addEventListener("popstate", this.handleOnPopState);
    // 컴포넌트 렌더링 시 현재 경로로 state 저장 (설정하지 않으면 null)
    window.history.replaceState({ path: this.state.path }, "");
  }

  componentWillUnmount() {
    window.removeEventListener("popstate", this.handleOnPopState);
  }

  render() {
    const contextValue = {
      path: this.state.path,
      changePath: this.handleChangePath,
    };

    return (
      <routerContext.Provider value={contextValue}>
        {this.props.children}
      </routerContext.Provider>
    );
  }
}
// Routes가 정해진 path에만 얽매이지 않고, children으로 받아 렌더링하도록 리팩토링(!) => 재사용성 향상
export const Routes = ({ children }) => {
  return (
    <routerContext.Consumer>
      {({ path }) => {
        let selectedRoute = null;

        React.Children.forEach(children, (child) => {
          if (!React.isValidElement(child)) return; // 리액트 Element인지 검사
          if (child.type === React.Fragment) return; // <></>인지 검사
          if (!child.props.path || !child.props.element) return; // Route 컴포넌트가 맞는지 검사
          if (child.props.path !== path.replace(/\?.*$/, "")) return; // 요청 경로를 검사(query 문자열 제거)

          selectedRoute = child.props.element;
        });

        return selectedRoute;
      }}
    </routerContext.Consumer>
  );
};

export const Route = () => null;

export const withRouter = (WrappedComponent) => {
  const WithRouter = (props) => (
    <routerContext.Consumer>
      {({ path, changePath }) => {
        // 주소 이동하기
        const navigate = (nextPath) => {
          if (path !== nextPath) changePath(nextPath);
        };
        // 주소 일치 여부 확인
        const match = (comparedPath) => comparedPath === path;
        // 쿼리 스트링 이용하기
        const params = () => {
          const params = new URLSearchParams(window.location.search);
          
          const paramsObject = {};
          for (const [key, value] of params) {
            paramsObject[key] = value;
          }
          return paramsObject;
        }

        const enhancedProps = {
          navigate,
          match,
          params
        };

        return <WrappedComponent {...props} {...enhancedProps} />;
      }}
    </routerContext.Consumer>
  );
  WithRouter.displayName = `WithRouter(${getComponentName(WrappedComponent)})`;
  return WithRouter;
};
