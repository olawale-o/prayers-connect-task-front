import { useParams } from "react-router-dom";

const TaskDetail = () => {
  const { id } = useParams();

  return (
    <div>Task {id}</div>
  )
};

export default TaskDetail;
