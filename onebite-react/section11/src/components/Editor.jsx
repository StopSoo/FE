import { useRef, useState } from "react";
import "./Editor.css";

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    if (!content) {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };
  // 사용자가 엔터키를 눌렀을 때 todos가 등록되도록 하는 함수 
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  }

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        value={content}
        onKeyDown={onKeyDown}
        onChange={onChangeContent}
        placeholder="새로운 Todo.."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
