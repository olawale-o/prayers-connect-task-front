import React, { useEffect, useCallback } from "react";
import { useParams, useLoaderData } from "react-router-dom";

import { useModals } from '../hooks/useModals';
import TaskEditModal from "../components/TaskEditModal";

import TaskService from "../services/task";

export async function loader({ params }) {
  return TaskService.getTask(params.id);
}

const TaskDetail = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [openEditModal, closeEditModal, editModal] = useModals('EditModal');

  const openModal = useCallback(() => openEditModal(), [id]);

  useEffect(() => {
    openModal();
  }, [openModal]);
  return (
    <TaskEditModal
      isOpen={editModal.EditModal}
      closeModal={closeEditModal}
      task={data}
      index={id}
    />
  )
};

export default TaskDetail;
