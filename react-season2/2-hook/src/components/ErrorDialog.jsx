import Button from "./Button";
import Dialog from "./Dialog";

const ErrorDialog = () => (
  <Dialog
    header={<>오류</>}
    footer={
      <Button onClick={() => console.log("// TODO: MyLayout 사용")}>
        네, 알겠습니다.
      </Button>
    }
  >
    잠시 후 다시 시도해주세요.
  </Dialog>
);

export default ErrorDialog;
