import { ITask } from "@/Types/task";
import React from "react";

const TaskCard = ({ task }: { task: ITask }) => {
  return (
    <div className="w-11/12 md:w-full h-60 border-2 rounded-lg border-primary-100">
      <div>
        <h1 className="text-base md:text-xl font-bold p-3">{task.title}</h1>
        <p className="px-3">{task.description.slice(0, 50)}.....</p>
        <h3 className="text-base font-semibold p-3">
          Deadline: {task.deadline}
        </h3>
        <div className="font-semibold px-3">
          {task.done ? <h3>Status: Completed</h3> : <h3>Status: Pending</h3>}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
