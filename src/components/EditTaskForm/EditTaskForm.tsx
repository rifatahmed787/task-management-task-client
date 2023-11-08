"use client";

import { ITask } from "@/Types/task";
import React, { useEffect, useState } from "react";
import Button from "../UI/Button";
import ToastContainer from "../UI/Toast";
import FileInput from "../UI/Form-items/FileInput";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { useUploderMutation } from "@/Redux/features/upload/uploadApi";
import { useEditTaskMutation } from "@/Redux/features/tasks/taskApi";
import { get_error_messages } from "@/lib/Error_message";
import Link from "next/link";
import ICONS from "../shared/Icons/AllIcons";
import TextInput from "../UI/Form-items/TextInput";
import TextArea from "../UI/Form-items/TextArea";

const EditTaskForm = ({ task_details }: { task_details: ITask }) => {
  const { control, handleSubmit, setValue } = useForm();
  const [uploader] = useUploderMutation();
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [AlertType, setAlertType] = useState<"success" | "error" | "warning">(
    "success"
  );
  const [AlertMessages, setAlertMessages] = useState("");
  const [file, setFile] = useState<File | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [EditTask, { isError, error, isSuccess }] = useEditTaskMutation();

  // Set default values for the form fields based on the task_details
  useEffect(() => {
    setValue("title", task_details?.title || "");
    setValue("description", task_details?.description || "");
    setValue("deadline", task_details?.deadline || "");
  }, [task_details, setValue]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    let cover_image = "";

    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        const uploadResponse = await uploader({ data: formData });
        if (uploadResponse && "data" in uploadResponse) {
          cover_image = uploadResponse.data.images[0];
        }
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }

    try {
      await EditTask({
        data: {
          ...data,
          done: false,
          cover_image,
        },
        taskID: task_details._id,
      });
      setIsLoading(false);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  // Error and success handling
  useEffect(() => {
    if (isError && error && "data" in error) {
      setIsAlertOpen(true);
      setAlertType("error");
      const error_messages = get_error_messages(error);
      setAlertMessages(error_messages);
    } else if (isSuccess) {
      setIsAlertOpen(true);
      setAlertType("success");
      setAlertMessages("Task updated successfully");
    }
  }, [error, isError, isSuccess]);

  return (
    <div className={`min-h-screen w-full  flex items-center justify-center`}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`relative flex max-w-lg rounded-xl w-full flex-col gap-4 backdrop-blur-3xl bg-white/80 mx-5 px-5 md:px-[74px] py-7`}
      >
        {/* Your form content */}
        <div className="flex items-center justify-between gap-3 flex-wrap ">
          <h1 className="text-4xl font-anton text-center text-primary pt-1">
            Edit Task
          </h1>

          <Link href={"/"} className="flex items-center text-primary gap-2 ">
            {ICONS.home} Back to home
          </Link>
        </div>
        <div className="flex flex-col gap-6">
          <Controller
            name="title"
            control={control}
            defaultValue={task_details?.title}
            render={({ field }) => (
              <TextInput
                type="text"
                placeHolder=""
                currentValue={field.value}
                onChange={field.onChange}
                required={true}
                id="title"
                htmlFor="title"
                label="Title"
              />
            )}
          />

          <Controller
            name="description"
            control={control}
            defaultValue={task_details?.description}
            render={({ field }) => (
              <TextArea
                placeHolder="Description"
                currentValue={field.value}
                onChange={field.onChange}
                required={true}
                id="description"
                htmlFor="description"
                label=""
              />
            )}
          />

          <Controller
            name="deadline"
            control={control}
            defaultValue={task_details?.deadline}
            render={({ field }) => (
              <TextInput
                type="date"
                placeHolder=""
                currentValue={field.value}
                onChange={field.onChange}
                required={true}
                id="date"
                htmlFor="date"
                label=""
              />
            )}
          />
        </div>

        <FileInput
          label=""
          onChange={(selectedFile) => {
            setFile(selectedFile);
          }}
          currentFile={file}
          placeholder="Choose an image"
          required={false}
          id="image"
          htmlFor="image"
          currentValue=""
        />

        <Button
          type="submit"
          title="Submit"
          className="mt-6 bg-primary-100 w-full text-base font-medium rounded"
          icon={isLoading ? ICONS.button_loading_icon : undefined}
          isDisabled={isLoading}
        />

        {isAlertOpen && (
          <ToastContainer
            type={AlertType}
            messages={AlertMessages}
            isAlertOpen={isAlertOpen}
            setIsAlertOpen={setIsAlertOpen}
            className="absolute top-20 z-50 left-0 right-0 mx-auto flex justify-center"
          />
        )}
      </form>
    </div>
  );
};

export default EditTaskForm;
