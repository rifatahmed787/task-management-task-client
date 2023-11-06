"use client";
import { useAppSelector } from "@/Hooks/reduxHook";
import { useGetTaskDetailsQuery } from "@/Redux/features/tasks/taskApi";
import { ITask } from "@/Types/task";
import CardSkeleton from "@/components/Skeleton/CardSkeleton";
import React, { useEffect, useState } from "react";

const TaskDetails = ({ params }: any) => {
  const taskID = params?.taskId;

  const [taskDetailsSkip, setTaskDetailsSkip] = useState(true);
  useEffect(() => {
    if (taskID) {
      setTaskDetailsSkip(false);
    }
  }, [taskID]);

  const {
    data: task_details_data,
    isLoading,
    isError,
    // error,
  } = useGetTaskDetailsQuery(taskID, { skip: taskDetailsSkip });

  console.log(task_details_data);
  const task_details: ITask = task_details_data?.data;

  return (
    <div>
      {isLoading ? (
        <>
          <CardSkeleton />
        </>
      ) : (
        <>
          <div className="relative w-11/12 md:w-full h-64 border-2 rounded-lg border-primary-100">
            <div>
              <h1 className="text-base md:text-xl font-bold p-3">
                {task_details?.title}
              </h1>
              <p className="px-3">{task_details?.description}</p>
              <h3 className="text-base font-semibold p-3">
                Deadline: {task_details?.deadline}
              </h3>
              <div className="font-semibold px-3">
                {task_details?.done ? (
                  <h3>Status: Completed</h3>
                ) : (
                  <h3>Status: Pending</h3>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskDetails;
