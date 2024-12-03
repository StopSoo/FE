import React from "react";
import FormControl from "../../components/FormControl";
// 1. htmlFor값과 input태그의 name값을 같게 해야 레이블 클릭 시 필드에 포커싱 가능(!) + id 설정도 필수.
// 2. form에 id를 설정하고 이를 button에서 form 속성으로 지정하면, 해당 버튼을 클릭 시 폼이 제출됨(!)
// 3. form 객체에 ref 속성 지정 -> 컴포넌트 렌더링, DOM에 마운트 후 this.formRef.current에 form element의 값이 저장됨.
const OrderForm = ({ onSubmit }) => {
  // 사용자가 입력한 값을 받아오는 함수
  const getInputValueByName = (name) => {
    // TODO: ref
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // 리렌더링 방지

    const deliveryAddress = getInputValueByName("deliveryAddress");
    const deliveryContact = getInputValueByName("deliveryContact");
    const paymentMethod = getInputValueByName("paymentMethod");
    const messageToShop = getInputValueByName("messageToShop");
    const messageToRider = getInputValueByName("messageToRider");

    onSubmit({
      deliveryAddress,
      deliveryContact,
      paymentMethod,
      messageToShop,
      messageToRider,
    });
  };

  return (
    <form
      className="OrderForm"
      id="order-form"
      onSubmit={handleSubmit}
      // ref={this.formRef}
    >
      <FormControl label="주소" htmlFor={"deliveryAddress"} required>
        <input
          type="text"
          name="deliveryAddress"
          id="deliveryAddress"
          placeholder="배달 받을 주소를 입력하세요"
          required
          autoFocus
        />
      </FormControl>
      <FormControl label="연락처" htmlFor={"deliveryContact"} required>
        <input
          type="text"
          name="deliveryContact"
          id="deliveryContact"
          placeholder="연락처를 입력하세요"
          required
          pattern="^\d{2,3}-\d{3,4}-\d{4}$"
        />
      </FormControl>
      <FormControl label="결제수단" htmlFor={"paymentMethod"} required>
        <select name="paymentMethod" id="paymentMethod">
          <option value="마이페이">마이페이</option>
          <option value="직접 결제">직접 결제</option>
        </select>
      </FormControl>
      <FormControl label="가게 사장님께" htmlFor={"messageToShop"}>
        <textarea name="messageToShop" id="messageToShop" />
      </FormControl>
      <FormControl label="라이더님께" htmlFor={"messageToRider"}>
        <textarea name="messageToRider" id="messageToRider" />
      </FormControl>
    </form>
  );
};

export default OrderForm;
