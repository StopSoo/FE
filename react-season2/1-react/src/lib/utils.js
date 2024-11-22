// 컴포넌트의 이름을 가져오는 함수
export const getComponentName = ({ displayName, name }) =>
  displayName || name || "Component";
