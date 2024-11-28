import Button from "../../components/Button";
import Dialog from "../../components/Dialog";

const PaymentSuccessDialog = () => {
  const handleClickNo = () => {
    // TODO: closeDialog();
    // TODO: navigate("/");
  };

  const handleClickYes = () => {
    // TODO: closeDialog();
    // TODO: navigate("/order");
  };

  return (
    <Dialog
      header={<>결제 완료</>}
      footer={
        <>
          <Button style={{ marginRight: "8px" }} onClick={handleClickNo}>
            아니오
          </Button>
          <Button styleType={"brand"} onClick={handleClickYes}>
            예, 주문 상태를 확인합니다.
          </Button>
        </>
      }
    >
      결제가 완료되었습니다.
      <br />
      주문 상태를 보러 가시겠습니까?
    </Dialog>
  );
};

export default PaymentSuccessDialog;
