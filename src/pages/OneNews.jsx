import { useParams } from "react-router-dom";

export default function OneNews() {
  const { id } = useParams();
  return <div>OneNews {id}</div>;
}
