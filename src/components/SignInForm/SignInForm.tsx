"use client";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useLoginMutation } from "@/Redux/features/auth/authApi";
import { get_error_messages } from "@/lib/Error_message";
import Link from "next/link";
import { useEffect, useState } from "react";
import ICONS from "../shared/Icons/AllIcons";
import TextInput from "../UI/Form-items/TextInput";
import Button from "../UI/Button";
import ToastContainer from "../UI/Toast";
import { FieldValues } from "react-hook-form";

const SignInForm = () => {
  const { control, handleSubmit } = useForm();
  const [login, { isLoading, isError, error, isSuccess }] = useLoginMutation();
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const [AlertType, setAlertType] = useState<"success" | "error" | "warning">(
    "success"
  );
  const [AlertMessages, setAlertMessages] = useState("");

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      await login({ data });
      console.log(login);
    } catch (error) {
      console.error(error);
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
      setAlertMessages("Logged in successfully");
    }
  }, [error, isError, isSuccess]);

  return (
    <div className={`min-h-screen w-full  flex items-center justify-center`}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`relative flex max-w-lg rounded-xl w-full flex-col gap-4 backdrop-blur-3xl bg-white/80 px-10 md:px-[74px] py-12`}
      >
        <div className="flex items-center justify-between gap-3 flex-wrap ">
          <h1 className=" text-4xl  font-anton text-ceter text-primary">
            LOG IN
          </h1>

          <Link href={"/"} className="flex items-center  gap-2 text-primary">
            {ICONS.home} Back to home
          </Link>
        </div>

        <div className="flex flex-col gap-6 mt-5">
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextInput
                type="email"
                placeHolder=""
                currentValue={field.value}
                onChange={(e) => field.onChange(e)}
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
                onChange={(e) => field.onChange(e)}
                required={true}
                id="password"
                htmlFor="password"
                label="Password"
              />
            )}
          />
        </div>

        <Button
          type="submit"
          title="Submit"
          className="mt-6 bg-primary-100 w-full 
					 text-base font-medium rounded"
          icon={isLoading ? ICONS.button_loading_icon : undefined}
          isDisabled={isLoading}
        />

        <div>
          <p className={`font-inter text-base text-[#000] text-center `}>
            Not registered?
            <Link href={"/signup"}>
              <span className="ml-2  underline">Create an Account</span>
            </Link>
          </p>
        </div>

        {isAlertOpen && (
          <ToastContainer
            type={AlertType}
            messages={AlertMessages}
            isAlertOpen={isAlertOpen}
            setIsAlertOpen={setIsAlertOpen}
            className="absolute top-10 z-50 left-0 right-0 mx-auto flex justify-center"
          />
        )}
      </form>
    </div>
  );
};

export default SignInForm;
