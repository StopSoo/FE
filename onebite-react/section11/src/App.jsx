import './App.css'
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";
import { useRef, useState, useReducer, useCallback } from "react";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

function App() {
  // useReducer(변환기 함수, 초기값)
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3); // id reference

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, []);
  // useCallback(불필요하게 재생성되지 않도록 방지하고 싶은 함수, deps)
  // onDelete 함수는 컴포넌트가 마운트되었을 때만 한 번 생성되고, 그 이후로는 리렌더링마다 생성되는 일은 X.
  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
