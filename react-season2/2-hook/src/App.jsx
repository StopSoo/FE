import React from "react";
import MyReact from "./lib/MyReact";
// const App = () => <>2-hook</>;
// export default App;

function NameField() {
  const [name, setName] = MyReact.useName('사용자1');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return <input value={name} onChange={handleChange} />;
}

export default NameField;
