import { useEffect, useState } from "react";

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

  useEffect(() => {
    setErrors(validate(values))
  }, [values]);

  return {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  };
};
