"use client";
import {
  useForm,
  Controller,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";
import { useUploderMutation } from "@/Redux/features/upload/uploadApi";
import Button from "@/components/UI/Button";
import FileInput from "@/components/UI/Form-items/FileInput";
import TextInput from "@/components/UI/Form-items/TextInput";
import ToastContainer from "@/components/UI/Toast";
import ICONS from "@/components/shared/Icons/AllIcons";
import Link from "next/link";
import { useEffect, useState } from "react";
import { get_error_messages } from "@/lib/Error_message";
import TextArea from "../UI/Form-items/TextArea";
import { useAddTaskMutation } from "@/Redux/features/tasks/taskApi";

const AddTask = () => {
  const { control, handleSubmit } = useForm();
  const [AddTask, { isError, error, isSuccess }] = useAddTaskMutation();
  const [uploader] = useUploderMutation();
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [AlertType, setAlertType] = useState<"success" | "error" | "warning">(
    "success"
  );
  const [AlertMessages, setAlertMessages] = useState("");
  const [file, setFile] = useState<File | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log("this is addtask data", data);
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
    console.log(cover_image);

    try {
      await AddTask({
        data: {
          ...data,
          done: false,
          cover_image,
        },
      });
      setIsLoading(false);
    } catch (error) {
      console.error("Error registering user:", error);
    }
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
      setAlertMessages("Signed up successfully");
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
          <h1 className=" text-4xl  font-anton text-ceter text-primary pt-1">
            Add Task
          </h1>

          <Link href={"/"} className="flex items-center text-primary gap-2 ">
            {ICONS.home} Back to home
          </Link>
        </div>
        <div className="flex flex-col gap-6">
          <Controller
            name="title"
            control={control}
            defaultValue=""
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
            defaultValue=""
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
            defaultValue=""
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

export default AddTask;
