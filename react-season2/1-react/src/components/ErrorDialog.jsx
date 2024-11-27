import Button from "./Button";
import Dialog from "./Dialog";
import * as MyLayout from "../lib/MyLayout";

const ErrorDialog = ({ finishLoading }) => (
  <Dialog
    header={<>오류</>}
    footer={<Button onClick={finishLoading}>확인</Button>}
  >
    잠시 후 다시 시도해주세요.
  </Dialog>
);

export default MyLayout.withLayout(ErrorDialog);
