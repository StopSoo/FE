import React from "react";
import FormControl from "../../components/FormControl";
// 1. htmlFor값과 input태그의 name값을 같게 해야 레이블 클릭 시 필드에 포커싱 가능(!) + id 설정도 필수.
// 2. form에 id를 설정하고 이를 button에서 form 속성으로 지정하면, 해당 버튼을 클릭 시 폼이 제출됨(!)
// 3. form 객체에 ref 속성 지정 -> 컴포넌트 렌더링, DOM에 마운트 후 this.formRef.current에 form element의 값이 저장됨.
class OrderForm extends React.Component {
  // handleSubmit은 비동기로 동작해야 하기 때문에, constructor를 통해 this를 고정시킴.
  constructor(props) {
    super(props);

    this.formRef = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // 사용자가 입력한 값을 받아오는 함수
  getInputValueByName(name) {
    if (!this.formRef.current) return;

    const inputElement = this.formRef.current.elements.namedItem(name);
    
    if (!inputElement) return '';
    return inputElement.value;
  }

  handleSubmit(e) {
    e.preventDefault(); // 리렌더링 방지

    const deliveryAddress = this.getInputValueByName("deliveryAddress");
    const deliveryContact = this.getInputValueByName("deliveryContact");
    const paymentMethod = this.getInputValueByName("paymentMethod");
    const messageToShop = this.getInputValueByName("messageToShop");
    const messageToRider = this.getInputValueByName("messageToRider");

    console.log("submit", {
      deliveryAddress,
      deliveryContact,
      paymentMethod,
      messageToShop,
      messageToRider
    });
  }

  render() {
    return (
      <form
        className="OrderForm"
        id="order-form"
        onSubmit={this.handleSubmit}
        ref={this.formRef}
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
  }
}

export default OrderForm;
