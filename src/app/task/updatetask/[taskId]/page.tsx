"use client";

import { ITask } from "@/Types/task";
import React, { useEffect, useState } from "react";
import { useGetTaskDetailsQuery } from "@/Redux/features/tasks/taskApi";

import { useAppSelector } from "@/Hooks/reduxHook";
import EditTaskForm from "@/components/EditTaskForm/EditTaskForm";

const EditPage = ({ params }: any) => {
  const taskID = params?.taskId;
  const { isLoggedIn, user } = useAppSelector((state) => state.auth);
  const [taskDetailsSkip, setTaskDetailsSkip] = useState(true);
  useEffect(() => {
    if (taskID) {
      setTaskDetailsSkip(false);
    }
  }, [taskID]);

  const {
    data: task_details_data,

    // error,
  } = useGetTaskDetailsQuery(taskID, { skip: taskDetailsSkip });

  console.log(task_details_data);
  const task_details: ITask = task_details_data?.data;

  return (
    <div className={`min-h-screen w-full  flex items-center justify-center`}>
      {isLoggedIn && user?.email && (
        <EditTaskForm task_details={task_details} />
      )}
    </div>
  );
};

export default EditPage;
