import { createContext, createElement, useContext, useEffect, useState } from "react";

export const useForm = ({ initialValues, validate, onSubmit }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const nextValues = {
      ...values,
      [e.target.name]: e.target.value,
    };
    setValues(nextValues);
  };

  const handleBlur = (e) => {
    const nextTouched = {
      ...touched,
      [e.target.name]: e.target.value,
    };
    setTouched(nextTouched);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nextTouched = Object.keys(values).reduce((touched, field) => {
      touched[field] = true;
      return touched;
    }, {});
    setTouched(nextTouched);

    const errors = validate(values);
    setErrors(errors);
    // 에러 메시지가 이미 존재할 경우 반환.
    if (Object.values(errors).some(Boolean)) return;

    onSubmit(values);
  };

  const getFieldProps = (name) => {
    const value = values[name];
    const onBlur = handleBlur;
    const onChange = handleChange;

    return {
      name,
      value,
      onBlur,
      onChange,
    };
  };

  useEffect(() => {
    setErrors(validate(values));
  }, [values]);

  return {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    getFieldProps,
  };
};

const formContext = createContext({});
formContext.displayName = "FormContext";

export const Form = ({ children, ...rest }) => {
  const formValue = useForm(rest);

  return (
    <formContext.Provider value={formValue}>
      <form noValidate onSubmit={formValue.handleSubmit}>
        {children}
      </form>
    </formContext.Provider>
  );
};

export const Field = ({ as = "input", children, ...rest }) => {
  const { getFieldProps } = useContext(formContext);

  return createElement(
    as,
    { ...rest, ...getFieldProps(rest.name) },
    children
  );
};

export const ErrorMessage = ({ name }) => {
  const { touched, errors } = useContext(formContext);
  if (!touched[name] || !errors[name]) return null;

  return <span>{errors[name]}</span>;
};
