import { useEffect, useRef, useState } from 'react';
import './App.css';
import Editor from './components/Editor';

interface Todo {
  id: number;
  content: string;
}

function App() {
  // useState() 타입 변수의 기본값은 undefined(!) => 초기값을 반드시 지정.
  const [todos, setTodos] = useState<Todo[]>([]);

  const idRef = useRef(0);
  // props로 전달.
  const onClickAdd = (text: string) => {
    setTodos([
      ...todos,
      {
        id: idRef.current++,
        content: text
      }
    ]);
  };
  // todos 배열이 바뀔 때마다 내부 함수를 수행.
  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="App">
      <h1>TODO</h1>
      <Editor onClickAdd={onClickAdd}/>
    </div>
  );
}

export default App;
