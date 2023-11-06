import { ITask } from "@/Types/task";
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useDeleteTaskMutation } from "@/Redux/features/tasks/taskApi";
import { get_error_messages } from "@/lib/Error_message";
import ToastContainer from "./Toast";
import ICONS from "../shared/Icons/AllIcons";
import { useAppSelector } from "@/Hooks/reduxHook";
import { useRouter } from "next/navigation";
import Link from "next/link";

const TaskCard = ({ task }: { task: ITask }) => {
  // Alert State
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [AlertType, setAlertType] = useState<"success" | "error" | "warning">(
    "success"
  );
  const [AlertMessages, setAlertMessages] = useState("");
  const router = useRouter();
  const { user } = useAppSelector((state) => state.auth);
  const [
    deleteTaskCard,
    {
      data: removeCard,
      isLoading: isRemoveCardLoading,
      isError,
      error,
      isSuccess,
    },
  ] = useDeleteTaskMutation();

  const removeHandler = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();

    deleteTaskCard({
      taskID: task?._id,
      user_id: user?._id,
    });
  };

  //error and success handlaing
  useEffect(() => {
    if (isError && error && "data" in error) {
      setIsAlertOpen(true);
      setAlertType("error");
      const error_messages = get_error_messages(error);
      setAlertMessages(error_messages);
    } else if (isSuccess) {
      setIsAlertOpen(true);
      setAlertType("success");
      setAlertMessages(removeCard?.message);
    }
  }, [error, isError, isSuccess, removeCard?.message]);

  return (
    <div className="relative w-11/12 md:w-full h-64 border-2 rounded-lg border-primary-100">
      <div>
        <h1 className="text-base md:text-xl font-bold p-3">{task.title}</h1>
        <p className="px-3">
          {task.description.slice(0, 50)}.....{" "}
          <Link href={`/task/${task._id}`}>
            {" "}
            <button className="text-primary-100">Read More</button>
          </Link>
        </p>
        <h3 className="text-base font-semibold p-3">
          Deadline: {task.deadline}
        </h3>
        <div className="font-semibold px-3">
          {task.done ? <h3>Status: Completed</h3> : <h3>Status: Pending</h3>}
        </div>
        <div className="flex justify-end px-3 pt-3 items-center gap-5">
          <button className="border border-primary-100 rounded-md text-green-600">
            <Icon icon="line-md:edit" width={25} />
          </button>
          <button className="border border-primary-100 rounded-md text-green-600">
            <Icon icon="carbon:task-complete" width={25} />
          </button>
          <button
            onClick={removeHandler}
            className="border border-primary-100 rounded-md text-red-600"
          >
            {isRemoveCardLoading ? (
              ICONS.button_loading_icon
            ) : (
              <Icon icon="material-symbols:delete-outline" width={25} />
            )}
          </button>
        </div>
      </div>
      {/* Toast */}
      {isAlertOpen && (
        <ToastContainer
          type={AlertType}
          messages={AlertMessages}
          isAlertOpen={isAlertOpen}
          setIsAlertOpen={setIsAlertOpen}
          className="absolute  top-0 z-50 left-0 right-0 mx-auto flex justify-center"
        />
      )}
    </div>
  );
};

export default TaskCard;
