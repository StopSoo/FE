// htmlFor: 레이블이 가리킬 인자
// label: 레이블명
// required: 필수 입력 여부
// children: input | textarea | select etc.
const FormControl = ({ htmlFor, label, required, children }) => {
  return (
    <div className="FormControl">
      <label htmlFor={htmlFor}>
        {label}
        {required && <span className="required">*</span>}
      </label>
      {children}
    </div>
  );
};

export default FormControl;
