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
import { useRegisterMutation } from "@/Redux/features/auth/authApi";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
  const { control, handleSubmit } = useForm();
  const router = useRouter();
  const [register, { isError, error, isSuccess }] = useRegisterMutation();
  const [uploader] = useUploderMutation();
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [AlertType, setAlertType] = useState<"success" | "error" | "warning">(
    "success"
  );
  const [AlertMessages, setAlertMessages] = useState("");
  const [file, setFile] = useState<File | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    let imageUrl = "";

    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        const uploadResponse = await uploader({ data: formData });
        if (uploadResponse && "data" in uploadResponse) {
          imageUrl = uploadResponse.data.images[0];
        }
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
    console.log(imageUrl);

    try {
      await register({
        data: {
          ...data,
          imageUrl,
        },
      });
      console.log(register);
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
      router.push("/task");
    }
  }, [error, isError, isSuccess, router]);

  return (
    <div className={`min-h-screen w-full  flex items-center justify-center`}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`relative flex max-w-lg rounded-xl w-full flex-col gap-4 backdrop-blur-3xl bg-white/80 mx-5 px-5 md:px-[74px] py-7`}
      >
        {/* Your form content */}
        <div className="flex items-center justify-between gap-3 flex-wrap ">
          <h1 className=" text-4xl  font-anton text-ceter text-primary pt-1">
            Signup
          </h1>

          <Link href={"/"} className="flex items-center text-primary gap-2 ">
            {ICONS.home} Back to home
          </Link>
        </div>
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-3">
            <Controller
              name="name.firstName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextInput
                  label="First Name"
                  type="text"
                  onChange={field.onChange}
                  currentValue={field.value}
                  placeHolder=""
                  id="firstName"
                  htmlFor="firstName"
                />
              )}
            />
            <Controller
              name="name.lastName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextInput
                  type="text"
                  placeHolder=""
                  currentValue={field.value}
                  onChange={field.onChange}
                  required={true}
                  id="lastName"
                  htmlFor="lastName"
                  label="Last Name"
                />
              )}
            />
          </div>

          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextInput
                type="email"
                placeHolder=""
                currentValue={field.value}
                onChange={field.onChange}
                required={true}
                id="email"
                htmlFor="email"
                label="Email"
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextInput
                type="password"
                placeHolder=""
                currentValue={field.value}
                onChange={field.onChange}
                required={true}
                id="password"
                htmlFor="password"
                label="Password"
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

        <div>
          <p className={`font-inter text-base text-[#000] text-center `}>
            Already have an account?
            <Link href={"/login"}>
              <span className="ml-2  underline">Login</span>
            </Link>
          </p>
        </div>

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

export default SignUpForm;
