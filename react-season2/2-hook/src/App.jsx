import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import * as MyRouter from "./lib/MyRouter";
import * as MyLayout from "./lib/MyLayout";

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
import * as MyForm from "./lib/MyForm";

const LoginForm = () => {
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

  const { values, touched, errors, handleBlur, handleChange, handleSubmit, getFieldProps } =
    MyForm.useForm({
      initialValues: { email: "", password: "" },
      validate,
      onSubmit: (values) => console.log("Submitted", values),
    });

  return (
    <form noValidate onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Email"
        autoFocus
        {...getFieldProps("email")}
      />
      {touched.email && errors.email && <span>{errors.email}</span>}
      <br />
      <input
        type="password"
        placeholder="Password"
        {...getFieldProps("password")}
      />
      {touched.password && errors.password && <span>{errors.password}</span>}
      <br />
      <button onClick={handleSubmit}>제출</button>
    </form>
  );
};

export default LoginForm;
