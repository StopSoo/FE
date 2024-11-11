const Button = ({ styleType, block, ...rest }) => {
  // 버튼 스타일 설정
  let className = `Button`;
  if (styleType) className += ` ${styleType}`;
  if (block) className += ` block`;

  return (
    <button className={className} {...rest} />
  );
};

export default Button;