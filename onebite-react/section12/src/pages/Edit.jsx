import { useParams } from "react-router-dom";

const Edit = () => {
  const params = useParams();
  return <div>{params.id}번 수정합니다 ^0^</div>
}

export default Edit;