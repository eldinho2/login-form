import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

import { EmailSVG, MobileSVG, PasswordSVG, EyeSVG } from "../assets/SVGs";

const createUserFormSchema = z.object({
  email: z.string().email({ message: "Enter a valid email address" }),
  password: z
    .string()
    .min(8, { message: "The password must be between 8 and 16 characters" })
    .max(16, { message: "The password must be between 8 and 16 characters" }),
  phone: z.string().min(10, { message: "Enter a valid phone number" }),
});

type createUserFormData = z.infer<typeof createUserFormSchema>;

type LoginFormProps = {
  isRegister: boolean;
};

export const UserForm = ({ isRegister }: LoginFormProps) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });

  const onSubmit = (data: createUserFormData) => {
    console.log(data);
  };

  const handleShowPassworld = () => {
    setIsShowPassword(!isShowPassword);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
        <div className="flex gap-4 pl-6 items-center min-h-[68px] w-[370px] border-[1px] rounded-lg border-[#E9ECEF]">
          <EmailSVG />
          <div className="flex flex-col py-2">
            <label htmlFor="email">Email Address</label>
            <input
              className="w-48 pt-2 focus:rounded-sm focus:outline-none focus:border-[#BC8363] focus:ring-2 focus:ring-[#BC8363]"
              placeholder="Your email address"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </span>
            )}
          </div>
        </div>
        {isRegister && (
          <div className="flex gap-4 pl-6 items-center min-h-[68px] w-[370px] border-[1px] rounded-lg border-[#E9ECEF]">
            <MobileSVG />
            <div className="flex flex-col py-2">
              <label htmlFor="phone">Mobile Number</label>
              <input
                className="w-48 pt-2 focus:rounded-sm focus:outline-none focus:border-[#BC8363] focus:ring-2 focus:ring-[#BC8363]"
                placeholder="Your phone number"
                {...register("phone")}
                onChange={(e) => {
                  const value = e.target.value;
                  if (isNaN(Number(value))) {
                    e.target.value = value.slice(0, -1);
                  }
                }}
              />
              {errors.phone && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </span>
              )}
            </div>
          </div>
        )}
        <div className="flex gap-4 pl-6 items-center min-h-[68px] w-[370px] border-[1px] rounded-lg border-[#E9ECEF]">
          <PasswordSVG />
          <div className="flex flex-col py-2">
            <label htmlFor="password">Password</label>
            <input
              className="w-48 pt-2 focus:rounded-sm focus:outline-none focus:border-[#BC8363] focus:ring-2 focus:ring-[#BC8363]"
              type={isShowPassword ? "text" : "password"}
              placeholder="Enter your password"
              {...register("password")}
            />
            {errors.password && (
              <span className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </span>
            )}
          </div>
          <span onClick={() => handleShowPassworld()} className="ml-10 cursor-pointer">
            <EyeSVG fill={isShowPassword ? "#f89161" : "#8B8B8B"} />
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <button
          className="mt-6 rounded-md text-white bg-[#BC8363] h-[55px] w-[370px]"
          type="submit"
        >
          {isRegister ? "Create Account" : "Login"}
        </button>
        {!isRegister && <span className="text-[#BC8363]">Forgot Password</span>}
      </div>
    </form>
  );
};
