import { useEffect, useReducer, useRef } from 'react';
import './App.css';
import Editor from './components/Editor';
import { Todo } from './types';
import TodoItem from './components/TodoItem';
// Action 객체의 타입을 서로소 유니온 타입으로 정의함(!)
type Action = 
  | {
      type: "CREATE";
      data: {
        id: number;
        content: string;
      };
    }
  | { 
      type: "DELETE";
      id: number;
    }

// reducer 함수: state와 action 객체를 매개변수로 받음.
function reducer(state: Todo[], action: Action) {
  switch (action.type) {
    case "CREATE": {
      return [...state, action.data];
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.id)
    }
  }
}

function App() {
  // useState() 타입 변수의 기본값은 undefined(!) => 초기값을 반드시 지정.
  // useReducer(): (reducer 함수, 상태의 초기값)
  const [todos, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);
  // Editor 컴포넌트에 props로 전달(!)
  const onClickAdd = (text: string) => {
    // 액션 객체를 인수로 전달.
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        content: text
      }
    });
  };
  // TodoItem 컴포넌트에 props로 전달(!)
  const onClickDelete = (id: number) => {
    dispatch({
      type: "DELETE",
      id: id,
    });
  };
  // todos 배열이 바뀔 때마다 내부 함수를 수행.
  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="App">
      <h1>TODO</h1>
      <Editor onClickAdd={onClickAdd}/>
      <div>
        {todos.map((todo) => (
          <TodoItem 
            key={todo.id} 
            onClickDelete={onClickDelete}
            {...todo} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;
