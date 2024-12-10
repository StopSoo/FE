import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import * as MyRouter from "./lib/MyRouter";
import * as MyLayout from "./lib/MyLayout";
import { useState } from "react";

const App = () => (
  <MyLayout.Layout>
    <MyRouter.Router>
      <MyRouter.Routes>
        <MyRouter.Route path="/" element={<ProductPage />} />
        <MyRouter.Route path="/cart" element={<CartPage />} />
        <MyRouter.Route path="/order" element={<OrderPage />} />
      </MyRouter.Routes>
    </MyRouter.Router>
  </MyLayout.Layout>
);

// export default App;

// required: 브라우저가 validate해주는 속성
// form - noValidate: 브라우저가 validate하지 못 하게 막음
const LoginForm = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validate = (values) => {
    const errors = {
      email: "",
      password: "",
    };

    if (!values.email) {
      errors.email = "이메일을 입력하세요.";
    }
    if (!values.password) {
      errors.password = "비밀번호를 입력하세요.";
    }

    return errors;
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate(values);
    setErrors(errors);
    // 에러 메시지가 이미 존재할 경우 반환.
    if (Object.values(errors).some(Boolean)) return;
    console.log("Submitted", values);
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
        autoFocus
      />
      {errors.email && <span>{errors.email}</span>}
      <br/>
      <input
        type="text"
        name="password"
        placeholder="Password"
        value={values.password}
        onChange={handleChange}
      />
      {errors.password && <span>{errors.password}</span>}
      <br/>
      <button onClick={handleSubmit}>제출</button>
    </form>
  );
};

export default LoginForm;
