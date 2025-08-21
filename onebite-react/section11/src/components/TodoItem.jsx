import { TodoDispatchContext } from "../App";
import "./TodoItem.css";
import { memo, useContext } from "react";

const TodoItem = ({ id, isDone, content, date }) => {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);

  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div key={id} className="TodoItem">
      <input type="checkbox" checked={isDone} onChange={onChangeCheckbox} />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};
// 고차 컴포넌트(HOC)
// memo의 두 번째 인수로 콜백함수를 전달할 수 있다.
// 콜백 함수의 반환값에 따라 props의 변경 여부를 파악.
// true면 변경X, false면 변경O.
// export default memo(TodoItem, (prevProps, nextProps) => {
//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.date !== nextProps.date) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   return true;
// });
// 현재 App 컴포넌트에서 useCallback을 사용하고 있으므로 위 코드를 주석 처리 (!)
export default memo(TodoItem);
