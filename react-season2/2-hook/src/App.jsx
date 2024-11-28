import React from "react";
import MyReact from "./lib/MyReact";
// const App = () => <>2-hook</>;
// export default App;

function NameField() {
  const [firstName, setFirstName] = MyReact.useState("지수");
  const [lastName, setLastName] = MyReact.useState("정");

  const handleChange = (e) => {
    setFirstName(e.target.value);
  };

  return (
    <>
      <input value={firstName} onChange={handleChange} />
      <input value={lastName} onChange={handleChange} />
    </>
  );
}

export default NameField;
